import React from 'react';

const ResumePreview = ({ formData }) => {
  const { personalInfo, experience, education, skills } = formData;

  return (
    <div className="resume-preview animate-fade-in">
      {/* Header Section */}
      <div className="border-b-2 pb-4 mb-6">
        <h1>{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
          {personalInfo.email && (
            <span className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {personalInfo.location}
            </span>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <div className="mb-6 section-enter-active">
          <h2>Professional Summary</h2>
          <p className="text-gray-600 whitespace-pre-line mt-3">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="mb-6 section-enter-active">
          <h2>Work Experience</h2>
          <div className="mt-4 space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{exp.position}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </div>
                </div>
                <p className="text-gray-600 mt-2 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-6 section-enter-active">
          <h2>Education</h2>
          <div className="mt-4 space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{edu.degree}</h3>
                    <p className="text-blue-600">{edu.institution}</p>
                    <p className="text-gray-600">{edu.field}</p>
                  </div>
                  <div className="text-gray-600 text-right">
                    <div className="font-medium">{edu.graduationYear}</div>
                    {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="section-enter-active">
          <h2>Skills</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag"
              >
                {skill.name} • {skill.level}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview; 