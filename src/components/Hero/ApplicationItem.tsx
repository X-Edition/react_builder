import React from 'react';
import { ApplicationItemProps } from './types';

const ApplicationItem: React.FC<ApplicationItemProps & { onClick: (title: string) => void }> = ({ title, onClick }) => {
  return (
    <div
      className="px-5 py-5 mx-2.5 mt-2.5 text-2xl rounded-xl border border-black border-solid bg-zinc-300 max-md:pr-5 cursor-pointer"
      onClick={() => onClick(title)}
    >
      {title}
    </div>
  );
};

export default ApplicationItem;
