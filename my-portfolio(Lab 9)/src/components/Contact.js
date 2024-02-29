// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg">
        Feel free to reach out to me through the following channels:
      </p>
      <ul className="list-disc mt-4">
        <li>Email: <a href="mailto:mahanc@berkeley.com" className="text-blue-500">mahanc@berkeley.com</a></li>
        <li>GitHub: <a href="https://github.com/your-github-mahancBerkeley" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Profile</a></li>
      </ul>
    </div>
  );
};

export default Contact;
