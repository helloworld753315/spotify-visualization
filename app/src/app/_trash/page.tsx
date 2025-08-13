'use client'

import styles from '@styles/page.module.scss'
import RadioButtonGroup from '@/components/ui/RadioButton'
import Track from '@/components/features/Track'
import { useState } from 'react'
// import SpotifyApi  from "@/app/_libs/spotify";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('BPM')
  const options: string[] = ['BPM', '音量', 'グルーヴ感', 'アコースティック感']
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  // const spotify = new SpotifyApi();

  // const accessUrl:string = spotify.AccessUrl

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
      {/* <a href={accessUrl}>spotifyへログイン</a> */}
    </div>
  )
  // <Playlist playlistName="プレイリスト名1" url="http://www.example.com" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"></Playlist>
}
