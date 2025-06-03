import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value
      }
    }));
  };

  return (
    <div className="form-section animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="e.g., John Doe"
              value={formData.personalInfo.fullName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g., john@example.com"
              value={formData.personalInfo.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="e.g., +1 234 567 8900"
              value={formData.personalInfo.phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="e.g., New York, NY"
              value={formData.personalInfo.location}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="summary">Professional Summary</label>
          <textarea
            id="summary"
            name="summary"
            placeholder="Write a brief summary of your professional background and key achievements..."
            value={formData.personalInfo.summary}
            onChange={handleChange}
            className="input-field"
            rows="4"
          />
          <p className="text-sm text-gray-500 mt-1">
            Tip: Keep your summary concise and highlight your most relevant achievements and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo; 