import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumePreview from './components/ResumePreview';

const App = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Mode Toggle */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {isPreviewMode ? 'Edit Resume' : 'Preview Resume'}
            </button>
            {isPreviewMode && (
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Download PDF
              </button>
            )}
          </div>

          {isPreviewMode ? (
            <div ref={componentRef}>
              <ResumePreview formData={formData} />
            </div>
          ) : (
            <div className="space-y-6">
              <PersonalInfo formData={formData} setFormData={setFormData} />
              <Experience formData={formData} setFormData={setFormData} />
              <Education formData={formData} setFormData={setFormData} />
              <Skills formData={formData} setFormData={setFormData} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;