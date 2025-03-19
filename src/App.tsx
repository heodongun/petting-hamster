import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [pets, setPets] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [isPetting, setIsPetting] = useState(false);

  const petHamster = () => {
    setIsPetting(true);
    setTimeout(() => {
      setPets(prev => prev + 1);
      setIsHappy(true);
      setIsPetting(false);
      setTimeout(() => setIsHappy(false), 500);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-amber-800 mb-8">
        햄스터 쓰다듬기 🐹
      </h1>
      
      <div className="relative w-64 h-64">
        <img 
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=400"
          alt="귀여운 햄스터"
          className={`rounded-full w-full h-full object-cover shadow-lg transition-transform duration-200 ${
            isHappy ? 'scale-110' : 'scale-100'
          }`}
        />
        {isHappy && (
          <div className="absolute top-0 right-0 animate-bounce">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
          </div>
        )}
        {isPetting && (
          <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 animate-petting"
          style={{
            backgroundImage: `url('/hand.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animation: isPetting ? 'petting 0.5s ease-in-out' : 'none'
          }}
        />
        
        )}
      </div>

      <button
        onClick={petHamster}
        disabled={isPetting}
        className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium shadow-lg transform transition hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        쓰다듬기
      </button>

      <div className="mt-6 text-amber-700 text-xl">
        지금까지 {pets}번 쓰다듬었어요!
      </div>

      <div className="mt-4 text-amber-600">
        {pets > 0 && (
          <p className="text-center">
            {pets < 10 ? '햄스터가 기뻐해요! 더 쓰다듬어주세요 ❤️' : 
             pets < 30 ? '햄스터가 매우 행복해요! 🥰' : 
             '햄스터가 당신을 너무 좋아해요! 💝'}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;