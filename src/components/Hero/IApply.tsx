import React from 'react';
import Column from './Column';
import Header from './Header';
import Title from './Title';
import Notification from './Notification';
import ApplicationItem from './ApplicationItem';
import ApplyItem from './ApplyItem';

const IApply: React.FC = () => {
  return (
    <main className="flex gap-5 max-md:flex-col">
      <Column>
        <section className="flex overflow-hidden flex-col mx-auto w-full text-black bg-neutral-400 max-md:mt-10 max-md:max-w-full">
          <Header title="iApply" username="JDubbbz" />
          <Title>Welcome</Title>
          <Notification title="Notifications:" />
          <div className="px-5 pt-4 pb-56 mx-2.5 mt-3.5 text-2xl bg-indigo-400 rounded-xl border border-black border-solid max-md:pr-5 max-md:pb-28">
            To Do:
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a2c03a1a673742d3b9dbf94a499d2daa/98bd91e72840e60e1ac9af2b5b9f4801aeac6eeb7e24e4937c8276ef12f0e73b?apiKey=a2c03a1a673742d3b9dbf94a499d2daa&" alt="" className="object-contain mt-4 rounded-none aspect-[4.44] w-[440px] max-md:max-w-full" />
        </section>
      </Column>

      <Column>
        <section className="flex overflow-hidden flex-col mx-auto w-full text-black bg-neutral-400 max-md:mt-10 max-md:max-w-full">
          <Header title="iApply" username="JDubbbz" />
          <Title>Applications</Title>
          {[1, 2, 3, 4, 5].map((num) => (
            <ApplicationItem key={num} title={`Application #${num}`} />
          ))}
          <div className="px-16 py-5 mx-2.5 mt-2.5 text-2xl bg-green-300 rounded-xl border border-black border-solid max-md:px-5">
            Add +
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a2c03a1a673742d3b9dbf94a499d2daa/e19af0feecb98f8ef43ccff1536cddf12b55f085ecafd1158e89e1a2cf644d42?apiKey=a2c03a1a673742d3b9dbf94a499d2daa&" alt="" className="object-contain mt-64 rounded-none aspect-[4.44] w-[440px] max-md:mt-10 max-md:max-w-full" />
        </section>
      </Column>

      <Column>
        <section className="flex overflow-hidden flex-col mx-auto w-full text-black bg-neutral-400 max-md:mt-10 max-md:max-w-full">
          <Header title="iApply" username="JDubbbz" />
          <Title>Apply</Title>
          <ApplyItem company="Google" status="Submitted" location="Address" />
          <ApplyItem company="Apple" status="Closed" location="Address" />
          <ApplyItem company="TTU Graduate Building" status="Open" location="Address" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a2c03a1a673742d3b9dbf94a499d2daa/b760681e6b1b5b391f292220d2bbd274d547d19e64dbe4005544830058fa16a9?apiKey=a2c03a1a673742d3b9dbf94a499d2daa&" alt="" className="object-contain mt-80 rounded-none aspect-[4.42] w-[439px] max-md:mt-10 max-md:max-w-full" />
        </section>
      </Column>

      <Column>
        <section className="flex overflow-hidden flex-col mx-auto w-full text-black bg-neutral-400 max-md:mt-10 max-md:max-w-full">
          <Header title="iApply" username="JDubbbz" />
          <Title>Resources</Title>
          <div className="px-5 pt-4 pb-56 mx-2.5 mt-2.5 text-2xl rounded-xl border border-black border-solid bg-zinc-300 max-md:pr-5 max-md:pb-28">
            Article #1
          </div>
          <div className="px-5 pt-4 pb-56 mx-2.5 mt-3.5 text-2xl rounded-xl border border-black border-solid bg-zinc-300 max-md:pr-5 max-md:pb-28">
            Article #2
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a2c03a1a673742d3b9dbf94a499d2daa/c16ef9573d8389ce53d60c78d52fc1c4c8b9244607828f5c635cb881aea03e36?apiKey=a2c03a1a673742d3b9dbf94a499d2daa&" alt="" className="object-contain mt-4 rounded-none aspect-[4.44] w-[440px] max-md:max-w-full" />
        </section>
      </Column>
    </main>
  );
};

export default IApply;