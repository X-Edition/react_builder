import React, { useState } from 'react';

interface ApplicationDetailsProps {
  title: string;
  notes: string;
  onSaveNotes: (notes: string) => void; // Callback to save notes
  onClose: () => void; // Callback to close the details view
}

const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ title, notes, onSaveNotes, onClose }) => {
  const [inputNotes, setInputNotes] = useState(notes);

  const handleSave = () => {
    onSaveNotes(inputNotes); // Save the notes
    onClose(); // Close the details view
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 w-1/3">
        <h2 className="text-2xl mb-4">{title}</h2>
        <textarea
          value={inputNotes}
          onChange={(e) => setInputNotes(e.target.value)}
          className="w-full h-32 border border-blue-500 rounded px-2 py-1"
          placeholder="Enter your notes here..."
        />
        <button onClick={handleSave} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded ml-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplicationDetails;
