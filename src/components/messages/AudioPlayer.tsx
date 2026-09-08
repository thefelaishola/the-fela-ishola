interface AudioPlayerProps {
  src: string | null;
  title: string;
}

/**
 * Renders a native, accessible audio element only when a real file exists.
 * When audio_url is null (no file uploaded yet), this renders nothing at
 * all, per the brand rule against showing an empty player.
 */
export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  if (!src) return null;

  return (
    <div className="border border-stone-200 p-4 bg-stone-50">
      <p className="text-xs uppercase tracking-widest2 text-stone-400 mb-3">
        Listen
      </p>
      <audio controls preload="none" aria-label={`Audio for ${title}`}>
        <source src={src} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
