import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 justify-between items-start self-stretch px-5 pt-2.5 pb-8 w-full whitespace-nowrap bg-sky-300 border-b-2 border-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <h2 className="mt-5 text-2xl">iApply</h2>
      <div className="flex gap-1.5 text-xl">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/a2c03a1a673742d3b9dbf94a499d2daa/f1ad0a0d6f1344c69d4ee3ae28419bb6701fd94e924ff18adb8345a610828414?apiKey=a2c03a1a673742d3b9dbf94a499d2daa&" 
          alt="User icon" 
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <span>JDubbbz</span>
      </div>
    </header>
  );
};

export default Header;