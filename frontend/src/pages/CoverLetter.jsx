import React, { useState } from 'react';
import { Save } from 'lucide-react';

const CoverLetter = () => {
  const [content, setContent] = useState("Dear Hiring Manager,\n\nI am writing to express my interest in the open position. I believe my skills and experience make me a strong candidate for this role.\n\nThank you for your consideration.\n\nSincerely,\nCandidate");

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4 border-b border-gray-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Cover Letter Builder</h1>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm">
          DRAFT
        </span>
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow border border-gray-200 dark:border-slate-800">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Please read and review your AI-generated cover letter carefully before saving.</p>
        <textarea 
          className="w-full h-96 p-6 border border-gray-300 dark:border-slate-700 rounded-md bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-serif leading-relaxed focus:ring-blue-500 focus:border-blue-500 transition-colors"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm">
            <Save className="w-5 h-5" />
            Approve & Save Cover Letter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
