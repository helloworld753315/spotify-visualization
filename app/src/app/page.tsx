'use client'

import styles from '@styles/page.module.scss'
import Button from '@/app/_components/Button'
import RadioButtonGroup from '@/app/_components/radioButton'
import Playlist from '@/app/_components/Playlist'
import Track from '@/app/_components/Track'
import LoginButton from '@/app/_components/LoginButton'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  getTokens,
  getUserPlaylists,
} from '@/app/_libs/spotify'
// import SpotifyApi  from "@/app/_libs/spotify";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('BPM')
  const options: string[] = ['BPM', '音量', 'グルーヴ感', 'アコースティック感']
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')

      if (code) {
        try {
          // アクセストークンを取得
          const tokens = await getTokens(code)
          setAccessToken(tokens.access_token)
          // プレイリストを取得
          const playlistData = await getUserPlaylists(tokens.access_token)
          setPlaylists(playlistData.items)
        } catch (err: any) {
          setError(err.message)
        }
      }
    }

    fetchAccessToken()
  }, [])

  return (
    <div>
      <h1>ほげ</h1>
      <RadioButtonGroup
        options={options}
        selectedOption={selectedOption}
        onChange={handleOptionChange}
      />
      <br />
      <Track
        trackName="曲名1"
        artist="アーティスト名1"
        url="http://www.example.com"
        image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
        rate={60}
      ></Track>
      <LoginButton />
      <div>
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          playlistName={playlist.name}
          url={playlist.external_urls.spotify}
          image={playlist.images[0]?.url || ''}
        />
      ))}
    </div>
    </div>
  )
  // <Playlist playlistName="プレイリスト名1" url="http://www.example.com" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"></Playlist>
}
