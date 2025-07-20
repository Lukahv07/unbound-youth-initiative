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

  // Smooth scroll-based volume adjustment
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Full hero section height
      const scrollY = window.scrollY;
      
      // Calculate volume based on hero visibility
      let volumeMultiplier = 1;
      
      if (scrollY <= heroHeight) {
        // Hero is in view - calculate fade based on how much is visible
        volumeMultiplier = Math.max(0.2, 1 - (scrollY / heroHeight) * 0.8);
      } else {
        // Hero is out of view - maintain minimum volume
        volumeMultiplier = 0.2;
      }
      
      const targetVolume = baseVolume * volumeMultiplier;
      setCurrentVolume(targetVolume);
      
      // Smoothly adjust volume for both audio tracks
      [audio1Ref.current, audio2Ref.current].forEach(audio => {
        if (audio && isPlaying) {
          audio.volume = targetVolume;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [baseVolume, isPlaying]);

  useEffect(() => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    // Set initial properties for both audio tracks
    audio1.volume = currentVolume;
    audio2.volume = currentVolume;
    audio1.loop = true;
    audio2.loop = true;

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
    const events = ['click', 'keydown', 'scroll', 'touchstart', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [hasInteracted, currentVolume, isPlaying]);

  const playAudio = async () => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    try {
      // Start both audio tracks simultaneously with fade in
      audio1.volume = 0;
      audio2.volume = 0;
      
      await Promise.all([
        audio1.play(),
        audio2.play()
      ]);
      
      setIsPlaying(true);
      
      // Gradually increase volume for both tracks
      const fadeIn = setInterval(() => {
        const target = currentVolume;
        if (audio1.volume < target && audio2.volume < target) {
          audio1.volume = Math.min(audio1.volume + 0.008, target);
          audio2.volume = Math.min(audio2.volume + 0.008, target);
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

    // Fade out effect for both tracks
    const fadeOut = setInterval(() => {
      if (audio1.volume > 0.01 || audio2.volume > 0.01) {
        audio1.volume = Math.max(audio1.volume - 0.015, 0);
        audio2.volume = Math.max(audio2.volume - 0.015, 0);
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
          className="group relative h-14 w-14 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/30 transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? 'Mute ambient sounds' : 'Unmute ambient sounds'}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 rounded-full shadow-lg shadow-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {isPlaying ? <Volume2 className="h-6 w-6 relative z-10" /> : <VolumeX className="h-6 w-6 relative z-10" />}
        </Button>
      </div>
    </>
  );
};

export default AmbientAudio;