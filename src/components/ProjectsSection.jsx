"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digital Portfolio Website",
    description: "Personal Digital Portfolio Website created with Nextjs and Tailwind CSS. This website was deployed using Vercel.",
    image: "/images/projects/1placeholder.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jonathanfranco1",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Single Qubit Rotation Visualizer",
    description: "Developed a Webapp/GUI visualizer specific for Quantum Computing. Allows users to see visual demonstrations of single-qubit rotations on Bloch Sphere. Allows users to understand fundamental concepts and rudimentary logic of Quantum Computing. Utilized: Python, Qiskit (IBM), and Tkinter",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/jonathanfranco1",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sorting Algorithms Visualizer",
    description: "Developed a visualizer for sorting algorithms in React. Allows users to see visual demonstrations of the following sorting algorithms - Bubble, Selection, Insertion, Quick, and Heap Sort. Designed the UI in Figma and implemented it by using React and styled using CSS. Utilized: Javascript, React, HTML, CSS, and Netlify.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/jonathanfranco1",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MNIST Digit Classifier",
    description: "Developed a deep neural network in Python with Keras to classify handwritten digits. Utilized: Python, Keras.",
    image: "/images/projects/4.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/jonathanfranco1",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NASA Cubesat",
    description: "As a part of the software subsystem for Nasa's Cubesat Initiative, I am responsible for developing software specific for radio functionality, data transmission, receiving data, telemetry commanding, etc. using LORA transciever logic. The software is then tested and embedded on an RFM98 board.",
    image: "/images/projects/5.png",
    tag: ["All", "Research", "Embedded"],
    gitUrl: "https://github.com/jonathanfranco1",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Binary Search Tree Research",
    description: "Developed a program that demonstrated the comparison of time complexities of the deletion methods of values of Red-Black Trees and Adelson-Velsky and Landis Trees. Wrote a research paper on this topic for the International Baccalaureate Program in 2022. Conveyed a hypothesis, methodology, procedure, processing of data, and a conclusion. Utilized: Java.",
    image: "/images/projects/6.png",
    tag: ["All", "Research"],
    gitUrl: "https://github.com/jonathanfranco1",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Breakthrough Junior Challenge",
    description: "Submitted to the global Breakthrough Junior Challenge by constructing a three minute video exemplifying the elementary ideas of quantum computing, in an instructional manner that is legible by all ages. Placed top thirty in the world (100,000+ applicants), along with top 3 in North America (placement is shown on Breakthrough Facebook page). Featured in CBS, Spectrum News (Austin), and Austins Innovator's 25 under 25 list. Utilized: Adobe Premier Pro, After Effects, Blender, and Cinema 4D",
    image: "/images/projects/7.png",
    tag: ["All", "Research"],
    gitUrl: "https://www.youtube.com/watch?v=ap_XXc-U8is",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Research"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Embedded"
          isSelected={tag === "Embedded"}
        />
                <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
                <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;