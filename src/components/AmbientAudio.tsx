import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientAudio = () => {
  const audio1Ref = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.08); // Lower default volume
  const [scrollVolume, setScrollVolume] = useState(1); // Multiplier for scroll-based volume reduction
  const [hasInteracted, setHasInteracted] = useState(false);

  // Two peaceful nature sounds to play simultaneously
  const soundTracks = [
    '/audio/peaceful-nature-1.mp3',
    '/audio/peaceful-nature-2.mp3'
  ];

  // Scroll detection for volume adjustment
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      if (scrollY > heroHeight * 0.8) {
        setScrollVolume(0.3); // Reduce to 30% when past hero
      } else {
        setScrollVolume(1); // Full volume in hero
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    // Set initial properties
    const finalVolume = volume * scrollVolume;
    audio1.volume = finalVolume;
    audio2.volume = finalVolume;
    audio1.loop = true;
    audio2.loop = true;

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
  }, [hasInteracted, volume, scrollVolume]);

  const playAudio = async () => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    try {
      // Fade in effect
      audio1.volume = 0;
      audio2.volume = 0;
      await Promise.all([audio1.play(), audio2.play()]);
      setIsPlaying(true);
      
      // Gradually increase volume
      const targetVolume = volume * scrollVolume;
      const fadeIn = setInterval(() => {
        if (audio1.volume < targetVolume) {
          const newVolume = Math.min(audio1.volume + 0.005, targetVolume);
          audio1.volume = newVolume;
          audio2.volume = newVolume;
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    } catch (error) {
      console.log('Audio play failed:', error);
    }
  };

  const pauseAudio = () => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    // Fade out effect
    const fadeOut = setInterval(() => {
      if (audio1.volume > 0.01) {
        const newVolume = Math.max(audio1.volume - 0.02, 0);
        audio1.volume = newVolume;
        audio2.volume = newVolume;
      } else {
        audio1.pause();
        audio2.pause();
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
    if (audio1Ref.current && audio2Ref.current) {
      const finalVolume = newVolume * scrollVolume;
      audio1Ref.current.volume = finalVolume;
      audio2Ref.current.volume = finalVolume;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
      <audio
        ref={audio1Ref}
        src={soundTracks[0]}
        preload="metadata"
      />
      <audio
        ref={audio2Ref}
        src={soundTracks[1]}
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
          max="0.15"
          step="0.02"
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, white 0%, white ${(volume / 0.15) * 100}%, rgba(255,255,255,0.3) ${(volume / 0.15) * 100}%, rgba(255,255,255,0.3) 100%)`
          }}
          aria-label="Ambient sound volume"
        />
      )}
    </div>
  );
};

export default AmbientAudio;