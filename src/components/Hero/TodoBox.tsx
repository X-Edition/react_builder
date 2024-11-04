import React from 'react';

const TodoBox: React.FC = () => {
  return (
    <section 
      className="px-5 pt-4 pb-56 mt-3.5 max-w-full text-2xl bg-indigo-400 rounded-xl border border-black border-solid w-[420px]"
      aria-label="To Do List"
    >
      To Do:
    </section>
  );
};

export default TodoBox;