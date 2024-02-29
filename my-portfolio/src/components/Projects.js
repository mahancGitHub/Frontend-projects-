// src/components/Projects.js
import React from 'react';
import Card from './Card'; // Assuming Card component is in the same directory

const Projects = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>

      <Card
        title="Project IN2000"
        description="A weather app created for visually impaired."
        technologies="Kotlin, JSON"
      />

      <Card
        title="Project IN2140"
        description="A communication system between a server and clients"
        technologies="C"
      />

    </div>
  );
};

export default Projects;
