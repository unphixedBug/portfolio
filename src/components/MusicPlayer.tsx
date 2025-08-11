import { useAudioPlayer } from "../hooks/useAudioPlayer";

export default function MusicPlayer() {
  const { currentTrack, isPlaying, togglePlay } = useAudioPlayer();

  return (
    <div className="flex h-24 fixed bottom-20 right-4 bg-textCustom text-darkBG rounded-lg">
      <img
        src={`./music/${currentTrack?.image}`}
        alt={currentTrack?.title}
        className="h-full w-auto object-cover rounded-l-lg"
      />
      <div className="my-auto mx-4">
        <p>{currentTrack?.title || "Aucun morceau"}</p>
        <p>{currentTrack?.artist || "Aucun artiste"}</p>
      </div>

      <button
        onClick={togglePlay}
        className="mr-4 p-2 rounded-full transition-colors"
      >
        {isPlaying ? (
          // Icône Pause
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Icône Play
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
