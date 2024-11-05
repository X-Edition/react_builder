import React from 'react';
import { NotificationProps } from './types';

const Notification: React.FC<NotificationProps> = ({ title }) => {
  return (
    <section className="px-5 pt-4 pb-56 mx-2.5 mt-2.5 text-2xl whitespace-nowrap bg-red-400 rounded-xl border border-black border-solid max-md:pr-5 max-md:pb-28">
      {title}
    </section>
  );
};

export default Notification;