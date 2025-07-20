import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientAudio = () => {
  const audio1Ref = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Default to on
  const [baseVolume] = useState(0.15); // Peaceful but audible volume
  const [currentVolume, setCurrentVolume] = useState(0.15);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Two simultaneous nature sounds
  const soundFiles = [
    '/nature-ambient-1.mp3',
    '/nature-ambient-2.mp3'
  ];

  // Initialize audio on component mount
  useEffect(() => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    // Set initial properties
    audio1.volume = 0;
    audio2.volume = 0;
    audio1.loop = true;
    audio2.loop = true;
    audio1.preload = 'auto';
    audio2.preload = 'auto';

    // Auto-start audio after first user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (isPlaying) {
          playAudio();
        }
      }
    };

    // Listen for any user interaction to start audio
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);

  // Smooth scroll-based volume adjustment
  useEffect(() => {
    const handleScroll = () => {
      if (!isPlaying) return;
      
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      let volumeMultiplier = 1;
      
      if (scrollY <= heroHeight) {
        volumeMultiplier = Math.max(0.2, 1 - (scrollY / heroHeight) * 0.8);
      } else {
        volumeMultiplier = 0.2;
      }
      
      const targetVolume = baseVolume * volumeMultiplier;
      setCurrentVolume(targetVolume);
      
      // Apply volume to both tracks
      [audio1Ref.current, audio2Ref.current].forEach(audio => {
        if (audio && !audio.paused) {
          audio.volume = targetVolume;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [baseVolume, isPlaying]);

  const playAudio = async () => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    try {
      // Reset and play both tracks
      audio1.currentTime = 0;
      audio2.currentTime = 0;
      audio1.volume = 0;
      audio2.volume = 0;
      
      const playPromises = [audio1.play(), audio2.play()];
      await Promise.all(playPromises);
      
      setIsPlaying(true);
      
      // Fade in to current volume
      let targetVol = currentVolume;
      const fadeIn = setInterval(() => {
        if (audio1.volume < targetVol) {
          audio1.volume = Math.min(audio1.volume + 0.01, targetVol);
          audio2.volume = Math.min(audio2.volume + 0.01, targetVol);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
      
    } catch (error) {
      console.error('Audio play failed:', error);
      setIsPlaying(false);
    }
  };

  const pauseAudio = () => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    // Immediately pause both tracks
    audio1.pause();
    audio2.pause();
    audio1.volume = 0;
    audio2.volume = 0;
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <>
      <audio
        ref={audio1Ref}
        src={soundFiles[0]}
        preload="auto"
      />
      <audio
        ref={audio2Ref}
        src={soundFiles[1]}
        preload="auto"
      />
      
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="ghost"
          size="lg"
          onClick={toggleAudio}
          className="group relative h-16 w-16 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/40 transition-all duration-300 hover:scale-105 shadow-2xl"
          aria-label={isPlaying ? 'Mute ambient sounds' : 'Unmute ambient sounds'}
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 rounded-full shadow-2xl shadow-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {isPlaying ? <Volume2 className="h-8 w-8 relative z-10" /> : <VolumeX className="h-8 w-8 relative z-10" />}
        </Button>
      </div>
    </>
  );
};

export default AmbientAudio;