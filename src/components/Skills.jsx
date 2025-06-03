import React from 'react';

const Skills = ({ formData, setFormData }) => {
  const handleAddSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { name: '', level: 'Intermediate' }]
    }));
  };

  const handleSkillChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const handleRemoveSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 gap-4">
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Skill Name"
              value={skill.name}
              onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
              className="input-field flex-1"
            />
            <select
              value={skill.level}
              onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
              className="input-field w-40"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <button
              onClick={() => handleRemoveSkill(index)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddSkill}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Skill
      </button>
    </div>
  );
};

export default Skills; 