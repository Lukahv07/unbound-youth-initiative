import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.15); // Start with low volume
  const [hasInteracted, setHasInteracted] = useState(false);

  // Nature sound files - alternating between different ambient tracks
  const soundTracks = [
    '/audio/birds-chirping.mp3',
    '/audio/light-rain.mp3'
  ];
  
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial properties
    audio.volume = volume;
    audio.loop = true;

    // Auto-play after user interaction (required by browsers)
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        playAudio();
      }
    };

    // Listen for any user interaction to start audio
    const events = ['click', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [hasInteracted, volume]);

  const playAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      // Fade in effect
      audio.volume = 0;
      await audio.play();
      setIsPlaying(true);
      
      // Gradually increase volume
      const fadeIn = setInterval(() => {
        if (audio.volume < volume) {
          audio.volume = Math.min(audio.volume + 0.01, volume);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    } catch (error) {
      console.log('Audio play failed:', error);
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Fade out effect
    const fadeOut = setInterval(() => {
      if (audio.volume > 0.01) {
        audio.volume = Math.max(audio.volume - 0.02, 0);
      } else {
        audio.pause();
        setIsPlaying(false);
        clearInterval(fadeOut);
      }
    }, 30);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Change track every 3 minutes for variety
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTrack(prev => (prev + 1) % soundTracks.length);
    }, 180000); // 3 minutes

    return () => clearInterval(interval);
  }, [isPlaying, soundTracks.length]);

  // Handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isPlaying) return;

    const wasPlaying = !audio.paused;
    audio.src = soundTracks[currentTrack];
    
    if (wasPlaying) {
      audio.load();
      playAudio();
    }
  }, [currentTrack, isPlaying, soundTracks]);

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
      <audio
        ref={audioRef}
        src={soundTracks[currentTrack]}
        preload="metadata"
      />
      
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleAudio}
        className="text-white hover:bg-white/20 p-2 h-8 w-8"
        aria-label={isPlaying ? 'Pause ambient sounds' : 'Play ambient sounds'}
      >
        {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </Button>
      
      {isPlaying && (
        <input
          type="range"
          min="0"
          max="0.3"
          step="0.05"
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, white 0%, white ${(volume / 0.3) * 100}%, rgba(255,255,255,0.3) ${(volume / 0.3) * 100}%, rgba(255,255,255,0.3) 100%)`
          }}
          aria-label="Ambient sound volume"
        />
      )}
    </div>
  );
};

export default AmbientAudio;