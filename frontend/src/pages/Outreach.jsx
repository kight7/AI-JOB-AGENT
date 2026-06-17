import React, { useState } from 'react';
import { Save, AlertTriangle } from 'lucide-react';

const Outreach = () => {
  const [message, setMessage] = useState("Hi [Recruiter],\n\nI saw the open role at [Company] and believe my background makes me a strong fit. Let me know if you are open to a brief chat.\n\nBest,\nCandidate");

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Outreach Drafts</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700 font-bold">
              This has not been sent. Review carefully before approving.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow border border-gray-200 dark:border-slate-800">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Drafted Message</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Edit the message below before approving.</p>
        </div>
        <textarea 
          className="w-full h-48 p-4 border border-gray-300 dark:border-slate-700 rounded-md bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm">
            <Save className="w-5 h-5" />
            I have reviewed this — Mark as Approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outreach;
