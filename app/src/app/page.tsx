"use client"

import Image from "next/image";
import styles from "@styles/page.module.scss";
import Button from "@/app/_components/Button";
import RadioButtonGroup from "@/app/_components/radioButton";
import Card from "@/app/_components/Card";
import { useState } from "react";


export default function Home() {
  const [selectedOption, setSelectedOption] = useState("BPM");
  const options: string[] = ["BPM", "音量", "グルーヴ感", "アコースティック感"];
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>ほげ</h1>
      <RadioButtonGroup
        options={options}
        selectedOption={selectedOption}
        onChange={handleOptionChange}
      />

      <br />
      <Card playlistName="プレイリスト名1" url="http://www.example.com" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"></Card>
    </div>
  );
}
