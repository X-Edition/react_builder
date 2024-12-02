import React from 'react';
import { ColumnProps } from './types';

const Column: React.FC<ColumnProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      {children}
    </div>
  );
};

export default Column;