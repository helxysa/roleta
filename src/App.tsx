import React, { useState } from 'react';
import { Dice6, Sparkles, Star, BookIcon as TiktokIcon } from 'lucide-react';

const videoLinks = [
  { id: 1, title: 'eu acho que isso vai te trazer alegria', tiktokUrl: 'https://vm.tiktok.com/ZMBPX5bkY/' },
  { id: 2, title: 'eu teria esse carro', tiktokUrl: 'https://vm.tiktok.com/ZMBPXBqw3/' },

  { id: 3, title: 'pitufinos', tiktokUrl: 'https://vm.tiktok.com/ZMBPXunNv/' },
  { id: 4, title: 'apenas veja', tiktokUrl: 'https://vm.tiktok.com/ZMBPXU4nS/' },
  { id: 5, title: 'oi vc e linda eu deixo vc quebrar meu coracao ta', tiktokUrl: 'https://open.spotify.com/intl-pt/track/2uvE4L5ZsYKpv8hbK4TIOt?si=8b056b0136ca4efc' },
  { id: 6, title: 'outra msc pq no meio do caminho fazendo isso decidi q irei agraciar vc com meu humor e otimo gosto musical', tiktokUrl: 'https://open.spotify.com/intl-pt/track/7tIJDktakabGoHjwTTa35W?si=51b8018ebf1e4dbc' },
  { id: 7, title: 'apenas sim', tiktokUrl: 'https://vm.tiktok.com/ZMBPsEEuS/' },
  { id: 8, title: 'apenas sim dnv', tiktokUrl: 'https://vm.tiktok.com/ZMBPsEEuS/' },
  { id: 9, title: 'bro....', tiktokUrl: 'https://vm.tiktok.com/ZMBPGR62J/' },
  { id: 10, title: 'eu amo os doguinhos....', tiktokUrl: 'https://vm.tiktok.com/ZMBaPgfXd/' },

  
  
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoLinks[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showList, setShowList] = useState(false);

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

  const toggleList = () => {
    setShowList(!showList);
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
          <h1 className="text-center text-4xl pixel-text text-pink-100 animate-glow">minha seleção de videos e musicas extremamente pensadas pra você (ou em você?</h1>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* Roulette display */}
          <div className="relative pixel-border-outer mb-6 p-2 bg-pink-950">
            <div className="pixel-border-pink p-6 text-center relative">
              <div className="pixel-screen mb-4">
                <div className="pixel-glitch"></div>
                <h2 className="text-2xl pixel-text text-pink-100">{currentVideo.title}</h2>
              </div>
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="sprite-container">
                  <img 
                    src='./xuxa.jpeg' 
                    className={`w-full h-full object-cover rounded-full ${isSpinning ? 'animate-spin' : ''}`} 
                    alt="Xuxa"
                  />
                </div>
              </div>
              
              {/* TikTok button */}
              <button
                onClick={handleVideoClick}
                className="w-full pixel-button-tiktok mt-6"
              >
                
                <span className="relative z-10">clica ai</span>
              </button>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-pink-300"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-pink-300"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-pink-300"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-pink-300"></div>
          </div>

          {/* New list button */}
          <button
            onClick={toggleList}
            className="w-full py-4 px-8 bg-pink-600 hover:bg-pink-500 text-white font-bold pixel-button-pink relative overflow-hidden mt-4"
          >
            <div className="pixel-button-shine"></div>
            <span className="relative z-10">
              {showList ? 'Esconder lista' : 'Mostrar todos os vídeos'}
            </span>
          </button>

          {/* Video list */}
          {showList && (
            <div className="mt-6 pixel-border-outer p-2 bg-pink-950">
              <div className="pixel-border-pink p-4">
                {videoLinks.map((video) => (
                  <div
                    key={video.id}
                    className="p-2 hover:bg-pink-800 cursor-pointer"
                    onClick={() => window.open(video.tiktokUrl, '_blank')}
                  >
                    {video.title}
                  </div>
                ))}
              </div>
            </div>
          )}

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