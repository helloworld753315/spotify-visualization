"use client"

import Image from "next/image";
import styles from "@styles/page.module.scss";
import Button from "@/app/_components/Button";
import RadioButtonGroup from "@/app/_components/radioButton";
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
    </div>
  );
}
