import React from 'react';
import Button from './Button';
import { generateCodeVerifier, generateCodeChallenge, redirectToSpotifyAuth, getTokens } from "@/app/_libs/spotify";

export default function LoginButton() {
  const handleLogin = async () => {
    try {
      // PKCE用のコードベリファイアとコードチャレンジを生成
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);

      // Spotify認証ページにリダイレクト
      redirectToSpotifyAuth(codeVerifier, codeChallenge);
    } catch (error) {
      console.error('ログイン処理中にエラーが発生しました:', error);
    }
  };

  return (
    <Button title="Spotifyでログイン" onClick={handleLogin}>
      ログイン
    </Button>
  );
}
