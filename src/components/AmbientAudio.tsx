import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientAudio = () => {
  const audio1Ref = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [baseVolume, setBaseVolume] = useState(0.12); // Start with low volume
  const [currentVolume, setCurrentVolume] = useState(0.12);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  // Two simultaneous nature sounds
  const soundFiles = [
    '/nature-ambient-1.mp3',
    '/nature-ambient-2.mp3'
  ];

  // Scroll detection to reduce volume when leaving hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // Approximate hero height
      const scrollY = window.scrollY;
      const newIsInHero = scrollY < heroHeight;
      
      if (newIsInHero !== isInHero) {
        setIsInHero(newIsInHero);
        const targetVolume = newIsInHero ? baseVolume : baseVolume * 0.3; // 30% of base volume when scrolled
        setCurrentVolume(targetVolume);
        
        // Smoothly transition volume for both audio tracks
        [audio1Ref.current, audio2Ref.current].forEach(audio => {
          if (audio && isPlaying) {
            const startVolume = audio.volume;
            const volumeDiff = targetVolume - startVolume;
            const steps = 20;
            const stepSize = volumeDiff / steps;
            let currentStep = 0;
            
            const volumeTransition = setInterval(() => {
              if (currentStep >= steps) {
                audio.volume = targetVolume;
                clearInterval(volumeTransition);
                return;
              }
              audio.volume = startVolume + (stepSize * currentStep);
              currentStep++;
            }, 25);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInHero, baseVolume, isPlaying]);

  useEffect(() => {
    const audio1 = audio1Ref.current;
    const audio2 = audio2Ref.current;
    if (!audio1 || !audio2) return;

    // Set initial properties for both audio tracks
    audio1.volume = currentVolume;
    audio2.volume = currentVolume;
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
  }, [hasInteracted, currentVolume]);

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

  const handleVolumeChange = (newVolume: number) => {
    setBaseVolume(newVolume);
    const targetVolume = isInHero ? newVolume : newVolume * 0.3;
    setCurrentVolume(targetVolume);
    
    if (audio1Ref.current && audio2Ref.current) {
      audio1Ref.current.volume = targetVolume;
      audio2Ref.current.volume = targetVolume;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
      <audio
        ref={audio1Ref}
        src={soundFiles[0]}
        preload="metadata"
      />
      <audio
        ref={audio2Ref}
        src={soundFiles[1]}
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
          max="0.25"
          step="0.02"
          value={baseVolume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, white 0%, white ${(baseVolume / 0.25) * 100}%, rgba(255,255,255,0.3) ${(baseVolume / 0.25) * 100}%, rgba(255,255,255,0.3) 100%)`
          }}
          aria-label="Ambient sound volume"
        />
      )}
      
      {isPlaying && !isInHero && (
        <div className="text-xs text-white/60 ml-1">
          Low
        </div>
      )}
    </div>
  );
};

export default AmbientAudio;