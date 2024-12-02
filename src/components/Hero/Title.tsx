import React from 'react';
import { TitleProps } from './types';

// Assuming TitleProps is defined in Title.tsx or the relevant file
type TitleProps1 = {
  children: React.ReactNode;
  className?: string; // Add className as an optional prop
};

const Title: React.FC<TitleProps1> = ({ children, className }) => {
  <h1 className={className}>{children}</h1>
  return (
    <h2 className="self-center mt-4 text-5xl font-bold text-white border-black border-solid border-[3px] max-md:text-4xl">
      {children}
    </h2>
    
  );
};

export default Title;