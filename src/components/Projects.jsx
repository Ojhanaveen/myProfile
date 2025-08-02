import React from "react";
import Myportfolio from "../assets/Screenshot (60).png";
import leetcode from "../assets/leetcode.avif";
import Xquize from "../assets/Screenshot (118).png"
import Xcruise from "../assets/Screenshot (119).png"
import Qkart from "../assets/Screenshot 2025-07-17 125013.png"


const projects = [
  {
    id: 1,
    name: "Myportfolio",
    technologies: "Html-CSS",
    image: Myportfolio,
    github: "https://ojhanaveen.github.io/Myportfolio",
  },
  {
    id: 2,
    name: "DSA_Leetcode",
    technologies: "Language-JavaScript",
    image: leetcode,
    github: "https://github.com/Ojhanaveen/DSA_Leetcode"
  },
  {
    id:3,
    name:"Xcruise",
    technologies:"Html-CSS",
    image:Xcruise,
    github:"https://naveen-me-fe-buildout-xcruise.vercel.app/"
  },
  {
    id:4,
    name:"Xquize",
    technologies:"Html-CSS-JavaScript",
    image:Xquize,
    github:"https://naveen-me-fe-buildout-xquizfe.vercel.app/"
  },
  {
    id:5,
    name:"Q-kart",
    technologies: "ReactJS, MateralUI",
    image: Qkart,
    github:"https://qkart-henna-iota.vercel.app/"
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
