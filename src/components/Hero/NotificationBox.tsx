import React from 'react';

const NotificationBox: React.FC = () => {
  return (
    <section 
      className="px-5 pt-4 pb-56 mt-2.5 max-w-full text-2xl whitespace-nowrap bg-red-400 rounded-xl border border-black border-solid w-[420px]"
      aria-label="Notifications"
    >
      Notifications:
    </section>
  );
};

export default NotificationBox;