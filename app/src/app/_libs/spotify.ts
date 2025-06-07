const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const redirect_uri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI!;
const scope = 'user-read-private user-read-email';

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope?: string;
}

/**
 * 認可コードを利用してアクセストークンとリフレッシュトークンを取得する
 */
export async function getTokens(code: string): Promise<TokenResponse> {
  const codeVerifier = localStorage.getItem('code_verifier');
  if (!codeVerifier) {
    throw new Error('Code verifier not found in localStorage');
  }

  const url = 'https://accounts.spotify.com/api/token';
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
    },
    body: new URLSearchParams({
      client_id: client_id,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirect_uri,
      code_verifier: codeVerifier,
    }),
  };

  const response = await fetch(url, payload);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch tokens: ${response.status} ${response.statusText} - ${errorText}`);
  }

  const data = (await response.json()) as TokenResponse;

  // アクセストークンをローカルストレージに保存（必要に応じて）
  localStorage.setItem('access_token', data.access_token);

  return data;
}

/**
 * アクセストークンを用いてユーザーのプレイリスト一覧を取得する
 */
export async function getUserPlaylists(access_token: string) {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch playlists');
  }
  return response.json();
}

/**
 * リフレッシュトークンを利用して新しいアクセストークンを取得する
 */
export async function refreshAccessToken(refresh_token: string) {
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
  });
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });
  if (!response.ok) {
    throw new Error('Failed to refresh access token');
  }
  return response.json();
}

/**
 * 認可URLを生成し、ユーザーをSpotifyの認可ページにリダイレクトする
 * @param codeVerifier PKCE用のコードベリファイア
 * @param codeChallenge PKCE用のコードチャレンジ
 */
export function redirectToSpotifyAuth(codeVerifier: string, codeChallenge: string): void {
  const authUrl = new URL('https://accounts.spotify.com/authorize');

  const params = {
    response_type: 'code',
    client_id: client_id,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirect_uri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.localStorage.setItem('code_verifier', codeVerifier);

  window.location.href = authUrl.toString();
}

/**
 * PKCE用のランダムなコードベリファイアを生成
 * @returns コードベリファイア
 */
export function generateCodeVerifier(): string {
  const array = new Uint8Array(64);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join('');
}

/**
 * コードベリファイアからコードチャレンジを生成
 * @param codeVerifier コードベリファイア
 * @returns コードチャレンジ
 */
export async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}