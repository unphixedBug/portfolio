import { useState, useRef, useEffect } from "react";

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  path: string;
  image: string;
}

export const useAudioPlayer = () => {
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const loadPlaylist = async () => {
      try {
        const response = await fetch("./music/musics.json");
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error("Erreur lors du chargement de la playlist:", error);
      }
    };
    loadPlaylist();
  }, []);

  useEffect(() => {
    if (playlist.length > 0) {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      audioRef.current = new Audio(
        `./music/${playlist[currentTrackIndex].path}`
      );

      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrackIndex, playlist]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return {
    currentTrack: playlist[currentTrackIndex] || null,
    isPlaying,
    togglePlay,
  };
};
