import React, { useState } from "react";
import { Heart } from "lucide-react";

function App() {
  const [pets, setPets] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [isPetting, setIsPetting] = useState(false);

  const petHamster = () => {
    setIsPetting(true);
    setTimeout(() => {
      setPets((prev) => prev + 1);
      setIsHappy(true);
      setIsPetting(false);
      setTimeout(() => setIsHappy(false), 500);
    }, 500);
  };

  // 🌟 이미지 변경 로직
  const getHamsterImage = () => {
    if (pets >= 1000) return "/그만해달라는햄스터.jpeg"; // 400번 이상
    if (pets >= 400) return "/무서운햄스터.jpg"; // 400번 이상
    if (pets >= 200) return "/놀란햄스터.jpeg"; // 200번 이상
    if (pets >= 100) return "/사랑하는햄스터.jpeg"; // 100번 이상
    if (pets >= 60) return "/웃는햄스터1.jpeg"; // 50번 이상
    if (pets >= 40) return "/웃는햄스터3.jpg"; // 30번 이상
    if (pets >= 30) return "/웃는햄스터2.jpeg"; // 20번 이상
    if (pets >= 20) return "/즐거워하는햄스터.jpg"; // 20번 이상
    if (pets >= 10) return "/슬픈햄스터.jpeg"; // 10번 이상
    return `/우는햄스터.jpg`; // 기본 이미지
  };

  const getHamsterMessage = () => {
    if (pets >= 1000) return "햄스터가 그만해달라고 애원합니다... 🥲";
    if (pets >= 400) return "햄스터가 너무 무서워하고 있어요! 😨";
    if (pets >= 200) return "햄스터가 깜짝 놀랐어요! 😲";
    if (pets >= 100) return "햄스터가 당신을 사랑해요! ❤️";
    if (pets >= 60) return "햄스터가 활짝 웃고 있어요! 😆";
    if (pets >= 40) return "햄스터가 행복해서 미소를 짓고 있어요! 😊";
    if (pets >= 30) return "햄스터가 조금 더 즐거워졌어요! 😄";
    if (pets >= 20) return "햄스터가 즐거워하고 있어요! 🎉";
    if (pets >= 10) return "햄스터가 살짝 슬퍼하지만, 더 쓰다듬어 주세요! 😢";
    return "햄스터를 쓰다듬어 주세요! 🐹";
  };
  

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-amber-800 mb-8">
        햄스터 쓰다듬기 🐹
      </h1>

      <div className="relative w-64 h-64">
        <img
          src={getHamsterImage()}
          alt="귀여운 햄스터"
          className={`rounded-full w-full h-full object-cover shadow-lg transition-transform duration-200 ${
            isHappy ? "scale-110" : "scale-100"
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
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              animation: isPetting ? "petting 0.5s ease-in-out" : "none",
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

      <div className="mt-4 text-amber-600 text-center">{getHamsterMessage()}</div>
    </div>
  );
}

export default App;
