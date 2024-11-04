import React from 'react';
import Header from './Header';
import NotificationBox from './NotificationBox';
import TodoBox from './TodoBox';

const WelcomePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center mx-auto w-full text-black bg-neutral-400 max-w-[480px]">
      <Header />
      <h1 className="mt-4 text-5xl font-bold text-white border-black border-solid border-[3px]">
        Welcome
      </h1>
      <NotificationBox />
      <TodoBox />
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/a2c03a1a673742d3b9dbf94a499d2daa/98bd91e72840e60e1ac9af2b5b9f4801aeac6eeb7e24e4937c8276ef12f0e73b?apiKey=a2c03a1a673742d3b9dbf94a499d2daa&" 
        alt="Decorative image" 
        className="object-contain self-stretch mt-4 w-full rounded-none aspect-[4.44]"
      />
    </main>
  );
};

export default WelcomePage;