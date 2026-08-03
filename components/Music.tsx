"use client";

import { useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);


  const toggleMusic = () => {
    if (!audioRef.current) return;


    if (playing) {
      audioRef.current.pause();
      setPlaying(false);

    } else {
      audioRef.current.play();
      setPlaying(true);

    }
  };


  return (
    <>
      <audio
        ref={audioRef}
        src="/music/musica.mp3"
        loop
      />


      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full border border-[#D4AF37] text-[#D4AF37] bg-[#00120f] shadow-lg"
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </>
  );
}