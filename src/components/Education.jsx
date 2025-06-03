import React from 'react';

const Education = ({ formData, setFormData }) => {
  const handleAddEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { institution: '', degree: '', field: '', graduationYear: '', gpa: '' }
      ]
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleRemoveEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Institution Name"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Field of Study"
              value={edu.field}
              onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Graduation Year"
              value={edu.graduationYear}
              onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="GPA (Optional)"
              value={edu.gpa}
              onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
              className="input-field"
            />
          </div>
          <button
            onClick={() => handleRemoveEducation(index)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddEducation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Education
      </button>
    </div>
  );
};

export default Education; 