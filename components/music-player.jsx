import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useGlobalColor } from "@/store/background";
import { useAudioPlayer } from "@/store/audio-player";
import { useMusicPlayed } from "@/store/music-played";

const MusicPlayer = () => {
  const globalColor = useGlobalColor((state) => state.globalColor);
  const audioPlayer = useAudioPlayer((state) => state.audioPlayer);
  const musicPlayed = useMusicPlayed((state) => state.musicPlayed);
  const [isMusicPaused, setIsMusicPaused] = useState(false);
  const setIsMusicPlayed = useMusicPlayed((state) => state.setIsMusicPlayed);
  const [volume, setVolume] = useState(33);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);

      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  const togglePlayPause = () => {
    if (audioPlayer.paused) {
      setIsMusicPaused(false);
      audioPlayer.play();
    } else {
      setIsMusicPaused(true);
      audioPlayer.pause();
    }
  };

  const closeMusicPlayer = () => {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
    }
    audioPlayer.currentTime = 0;
    setIsMusicPlayed(false);
  };

  const minimizeMusicPlayer = () => {
    setIsMinimized(true);
  };

  const restoreMusicPlayer = () => {
    setIsMinimized(false);
  };

  const backward10sec = () => {
    audioPlayer.currentTime -= 10;
  };

  const forward10sec = () => {
    audioPlayer.currentTime += 10;
  };

  const setVolumeValue = (value) => {
    setVolume(value);
    audioPlayer.volume = value / 100;
  };

  if (isMinimized) {
    return (
      <div
        className="absolute bottom-20 left-0 bg-white rounded-lg p-3 cursor-pointer z-50 bg-white"
        onClick={restoreMusicPlayer}
      >
        <Icon icon="ic:round-keyboard-arrow-up" className="text-black text-2xl" />
      </div>
    );
  }

  return (
    <div
      className={`absolute bottom-0 md:bottom-10 left-0 md:left-10 w-full md:w-1/3 bg-white rounded-lg z-50 flex flex-col p-5 justify-center gap-5 transition-opacity duration-500`}
      style={{ maxHeight: isMinimized ? "50px" : "fit-content" }}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="group cursor-pointer" onClick={minimizeMusicPlayer}>
            <Icon icon="material-symbols-light:remove" className="text-black text-3xl group-hover:text-red-600" />
          </div>
          <div className="flex justify-end group cursor-pointer" onClick={closeMusicPlayer}>
            <Icon icon="material-symbols-light:close-small-outline-rounded" className="text-black text-3xl group-hover:text-red-600" />
          </div>
        </div>

        <div className="text-black text-center text-sm">
          <p>{musicPlayed.title}</p>
        </div>
      </div>
      <div className="items-center justify-center gap-10 flex">
        <div className="p-2 rounded-lg cursor-pointer" style={{ backgroundColor: `#${globalColor}` }} onClick={backward10sec}>
          <Icon icon="material-symbols-light:replay-10-rounded" className={`text-3xl`} />
        </div>
        {isMusicPaused ? (
          <div className="p-2 rounded-lg cursor-pointer" style={{ backgroundColor: `#${globalColor}` }} onClick={togglePlayPause}>
            <Icon icon="material-symbols-light:play-arrow-rounded" className={`text-5xl`} />
          </div>
        ) : (
          <div className="p-2 rounded-lg cursor-pointer" style={{ backgroundColor: `#${globalColor}` }} onClick={togglePlayPause}>
            <Icon icon="material-symbols-light:pause" className={`text-5xl`} />
          </div>
        )}
        <div className="p-2 rounded-lg cursor-pointer" style={{ backgroundColor: `#${globalColor}` }} onClick={forward10sec}>
          <Icon icon="material-symbols-light:forward-10-rounded" className={`text-3xl`} />
        </div>
      </div>
      <div className="flex items-center gap-2 text-black">
        <div>
          <Icon className="text-2xl" style={{ color: `#${globalColor}` }} icon="mdi:volume-low" />
        </div>
        <input type="range" min="0" max="100" onChange={(value) => setVolumeValue(value.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        <div>
          <Icon className="text-2xl" style={{ color: `#${globalColor}` }} icon="mdi:volume-high" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
