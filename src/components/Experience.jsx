import React from 'react';

const Experience = ({ formData, setFormData }) => {
  const handleAddExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: '', position: '', startDate: '', endDate: '', description: '' }
      ]
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleRemoveExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              className="input-field"
            />
            <input
              type="date"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
              className="input-field"
            />
            <input
              type="date"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              className="input-field col-span-2 h-32"
            />
          </div>
          <button
            onClick={() => handleRemoveExperience(index)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddExperience}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience; 