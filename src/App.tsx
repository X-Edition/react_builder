import React, { useState } from 'react';
import Column from './components/Hero/Column';
import Header from './components/Hero/Header';
import Title from './components/Hero/Title';
import Notification from './components/Hero/Notification';
import ApplicationItem from './components/Hero/ApplicationItem';
import ApplyItem from './components/Hero/ApplyItem';
import ApplicationDetails from './components/Hero/ApplicationDetails'; // Import the new component
import './App.css';

interface Application {
  title: string;
  notes: string;
}

const IApply: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [applications, setApplications] = useState<Application[]>([{ title: `Application #1`, notes: '' }]);
  const [selectedApplicationIndex, setSelectedApplicationIndex] = useState<number | null>(null);

  const handleAddApplication = () => {
    const newApplication = { title: `Application #${applications.length + 1}`, notes: '' };
    setApplications([...applications, newApplication]);
  };

  const handleApplicationClick = (index: number) => {
    setSelectedApplicationIndex(index);
  };

  const updateApplicationNotes = (index: number, notes: string) => {
    const updatedApplications = [...applications];
    updatedApplications[index].notes = notes;
    setApplications(updatedApplications);
  };

  const closeApplicationDetails = () => {
    setSelectedApplicationIndex(null);
  };

  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col mx-auto w-full text-black bg-neutral-400 max-md:mt-10 max-md:max-w-full">
        <Header title="iApply" username="JDubbbz" />
        <Title>{activeTab === 1 ? 'Welcome' : activeTab === 2 ? 'Applications' : activeTab === 3 ? 'Apply' : 'Resources'}</Title>

        {activeTab === 1 && (
          <div>
            <Notification title="Notifications:" />
            <div className="px-5 pt-4 pb-56 mx-2.5 mt-3.5 text-2xl bg-indigo-400 rounded-xl border border-black border-solid max-md:pr-5 max-md:pb-28">
              To Do:
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            {applications.map((app, index) => (
              <ApplicationItem
                key={index}
                title={app.title}
                onClick={() => handleApplicationClick(index)}
              />
            ))}
            <button onClick={handleAddApplication} className="px-16 py-5 mx-2.5 mt-2.5 text-2xl bg-green-300 rounded-xl border border-black border-solid max-md:px-5">
              Add +
            </button>
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <ApplyItem company="Google" status="Submitted" location="Address" />
            <ApplyItem company="Apple" status="Closed" location="Address" />
            <ApplyItem company="TTU Graduate Building" status="Open" location="Address" />
          </div>
        )}

        {activeTab === 4 && (
          <div className="px-5 py-4 text-lg space-y-4">
            <div className="rounded-xl border border-black p-4 bg-zinc-300">
              <h3 className="font-bold">Writing a Strong Resume</h3>
              <p>A guide on how to structure your resume to stand out, with tips on formatting, keywords, and customization for each application.</p>
              <a href="https://www.thebalancecareers.com/how-to-write-a-resume-2063333" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Read more
              </a>
            </div>
            <div className="rounded-xl border border-black p-4 bg-zinc-300">
              <h3 className="font-bold">How to Write an Effective Cover Letter</h3>
              <p>Learn how to write a compelling cover letter that highlights your skills and enthusiasm for the role.</p>
              <a href="https://www.thebalancecareers.com/how-to-write-a-cover-letter-2060173" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Read more
              </a>
            </div>
            <div className="rounded-xl border border-black p-4 bg-zinc-300">
              <h3 className="font-bold">Interview Preparation Tips</h3>
              <p>Prepare effectively for interviews with advice on common questions, strategies for answering confidently, and body language.</p>
              <a href="https://www.indeed.com/career-advice/interviewing/interview-tips" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Read more
              </a>
            </div>
            <div className="rounded-xl border border-black p-4 bg-zinc-300">
              <h3 className="font-bold">Best Practices for Online Job Applications</h3>
              <p>Understand the nuances of applying online, including tips for applicant tracking systems and keyword optimization.</p>
              <a href="https://www.monster.com/career-advice/article/apply-online-job-application-best-practices" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Read more
              </a>
            </div>
          </div>
        )}

        {/* Show ApplicationDetails if an application is selected */}
        {selectedApplicationIndex !== null && (
          <ApplicationDetails
            title={applications[selectedApplicationIndex].title}
            notes={applications[selectedApplicationIndex].notes}
            onSaveNotes={(notes) => updateApplicationNotes(selectedApplicationIndex, notes)}
            onClose={closeApplicationDetails}
          />
        )}
      </section>

      <nav className="fixed bottom-0 flex w-full bg-gray-800 text-white py-3 justify-around">
        <button onClick={() => setActiveTab(1)}>Welcome</button>
        <button onClick={() => setActiveTab(2)}>Applications</button>
        <button onClick={() => setActiveTab(3)}>Apply</button>
        <button onClick={() => setActiveTab(4)}>Resources</button>
      </nav>
    </main>
  );
};

export default IApply;
