import { useRef, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.pause(); // 🔒 hard lock
    }
  }, []);

  useEffect(() => {
    (window as any).startRomanticMusic = () => {
      if (!unlocked && audioRef.current) {
        setUnlocked(true);
        audioRef.current.play().catch(() => {});
      }
    };
  }, [unlocked]);

  return (
    <>
      <audio ref={audioRef} src="/romantic.mp3" loop />
      <Outlet />
    </>
  );
}
