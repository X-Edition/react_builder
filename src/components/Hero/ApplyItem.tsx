import React from 'react';
import { ApplyItemProps } from './types';

const ApplyItem: React.FC<ApplyItemProps> = ({ company, status, location }) => {
  return (
    <div className="flex flex-col items-start pt-1.5 pr-20 pb-10 pl-4 mx-6 mt-3 rounded-xl border border-black border-solid bg-zinc-300 max-md:pr-5 max-md:mx-2.5">
      <h3 className="text-2xl">{company}</h3>
      <div className="mt-1 ml-6 text-xl w-[248px] max-md:ml-2.5">
        Status: {status}<br />
        Location: {location}
      </div>
    </div>
  );
};

export default ApplyItem;