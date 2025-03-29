import React, { useState } from 'react';
import { Dice6, Sparkles, Star, BookIcon as TiktokIcon } from 'lucide-react';

const videoLinks = [
  { id: 1, title: 'Video 1', tiktokUrl: 'https://tiktok.com/@user/video/example1' },
  { id: 2, title: 'Video 2', tiktokUrl: 'https://tiktok.com/@user/video/example2' },
  { id: 3, title: 'Video 3', tiktokUrl: 'https://tiktok.com/@user/video/example3' },
  { id: 4, title: 'Video 4', tiktokUrl: 'https://tiktok.com/@user/video/example1' },
  { id: 5, title: 'Video 5', tiktokUrl: 'https://tiktok.com/@user/video/example2' },
  { id: 6, title: 'Video 6', tiktokUrl: 'https://tiktok.com/@user/video/example3' },
  { id: 7, title: 'Video 7', tiktokUrl: 'https://tiktok.com/@user/video/example1' },
  { id: 8, title: 'Video 8', tiktokUrl: 'https://tiktok.com/@user/video/example2' },
  { id: 9, title: 'Video 9', tiktokUrl: 'https://tiktok.com/@user/video/example3' },
  { id: 10, title: 'Video 10', tiktokUrl: 'https://tiktok.com/@user/video/example1' },
  { id: 11, title: 'Video 11', tiktokUrl: 'https://tiktok.com/@user/video/example2' },
  { id: 12, title: 'Video 12', tiktokUrl: 'https://tiktok.com/@user/video/example3' },
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoLinks[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinRoulette = () => {
    setIsSpinning(true);
    
    let spins = 0;
    const maxSpins = 50;
    const interval = setInterval(() => {
      setCurrentVideo(videoLinks[Math.floor(Math.random() * videoLinks.length)]);
      spins++;
      
      if (spins >= maxSpins) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  const handleVideoClick = () => {
    window.open(currentVideo.tiktokUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-900 to-pink-800 text-white pixel-art overflow-hidden">
      {/* Decorative stars */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <Star className="absolute top-[10%] left-[10%] w-6 h-6 text-pink-300 animate-twinkle" />
        <Star className="absolute top-[20%] right-[20%] w-4 h-4 text-pink-200 animate-twinkle-delayed" />
        <Star className="absolute bottom-[15%] left-[25%] w-5 h-5 text-pink-300 animate-twinkle" />
        <Star className="absolute top-[35%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute bottom-[30%] right-[15%] w-4 h-4 text-pink-300 animate-twinkle-delayed" />
        <Star className="absolute top-[60%] right-[35%] w-5 h-5 text-pink-200 animate-twinkle" />
        <Star className="absolute bottom-[45%] left-[15%] w-3 h-3 text-pink-300 animate-twinkle-fast" />
        <Sparkles className="absolute top-[40%] right-[10%] w-6 h-6 text-pink-200 animate-float" />
        <Star className="absolute top-[35%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[35%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[35%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[5%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[95%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[85%] left-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />

        {/* //T */}
        <Star className="absolute top-[75%] left-[20%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] left-[20%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] left-[20%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] left-[20%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] left-[18%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[75%] w-3 h-3 text-pink-200 animate-twinkle-fast" />


        {/* //O */}
        <Star className="absolute top-[72%] right-[69%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[67%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[65%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[69%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[69%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[69%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[67%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[65%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[65%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[65%] w-3 h-3 text-pink-200 animate-twinkle-fast" />


        {/* //N */}
        <Star className="absolute top-[72%] right-[60%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[60%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[60%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[60%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[58%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[56%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[55%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[54%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[54%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[54%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[54%] w-3 h-3 text-pink-200 animate-twinkle-fast" />

        {/* //T */}
        <Star className="absolute top-[72%] right-[49%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[47%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[45%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[47%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[47%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[47%] w-3 h-3 text-pink-200 animate-twinkle-fast" />

        {/* //O */}
        <Star className="absolute top-[72%] right-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[38%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[36%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[40%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[38%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[36%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[36%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[36%] w-3 h-3 text-pink-200 animate-twinkle-fast" />

        {/* //n */}
        <Star className="absolute top-[72%] right-[30%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[30%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[30%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[30%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[28%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[26%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[25%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[75%] right-[24%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[74%] right-[24%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[73%] right-[24%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
        <Star className="absolute top-[72%] right-[24%] w-3 h-3 text-pink-200 animate-twinkle-fast" />
       
        <Sparkles className="absolute bottom-[24%] right-[13%] w-8 h-8 text-pink-300 animate-float-delayed" />
        <Sparkles className="absolute bottom-[24%] right-[83%] w-9 h-8 text-pink-300 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Pixel art banner */}
        <div className="pixel-banner mb-8">
          <div className="pixel-scanlines"></div>
          <h1 className="text-center text-4xl pixel-text text-pink-100 animate-glow">minha seleção de videos extremamente pensadas pra você</h1>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* Roulette display */}
          <div className="relative pixel-border-outer mb-6 p-2 bg-pink-950">
            <div className="pixel-border-pink p-6 text-center relative">
              <div className="pixel-screen mb-4">
                <div className="pixel-glitch"></div>
                <h2 className="text-2xl pixel-text text-pink-100">{currentVideo.title}</h2>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="sprite-container">
                  <Dice6 className={`w-full h-full text-pink-300 ${isSpinning ? 'animate-spin' : ''}`} />
                </div>
              </div>
              
              {/* TikTok button */}
              <button
                onClick={handleVideoClick}
                className="w-full pixel-button-tiktok mt-6"
              >
                <TiktokIcon className="w-5 h-5 inline-block mr-2" />
                <span className="relative z-10">assiste ai</span>
              </button>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-pink-300"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-pink-300"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-pink-300"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-pink-300"></div>
          </div>

          {/* Spin button */}
          <button
            onClick={spinRoulette}
            disabled={isSpinning}
            className="w-full py-4 px-8 bg-pink-600 hover:bg-pink-500 disabled:opacity-50 text-white font-bold pixel-button-pink relative overflow-hidden"
          >
            <div className="pixel-button-shine"></div>
            <span className="relative z-10">
              {isSpinning ? 'girandooo...' : 'clica pra girar!'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;