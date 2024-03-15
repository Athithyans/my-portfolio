"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: "Dynamic, responsive, and engaging web portfolio showcasing my full-stack development skills, utilizing Next.js for seamless server-side rendering, React for interactivity. Innovative portfolio with seamless navigation and sleek design.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Athithyans/my-portfolio",
    previewUrl: "https://my-portfolio-kappa-ten-89.vercel.app/",
  },

  {
    id: 2,
    title: "Digital Product Hosting Website",
    description: "A digital products hosting website where you can discover and access various digital products like digital paintings, webinars, and courses. User-friendly interface with secure payments, reviews, and exclusive content. Responsive design for all devices.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gallantgeeks/HOST_KARO",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Legal Awareness Guide",
    description: "The Legal Awareness App revolutionizes legal assistance in India with its user-friendly interface, multilingual support, and comprehensive features. It simplifies legal jargon, educates users on their rights, predicts case success, offers step-by-step filing guidance, connects users with nearby advocates, and keeps them updated on legal developments.",
    image: "/images/projects/4.png",
    tag: ["All", "Web "],
    gitUrl: "https://github.com/gallantgeeks/Know-Your-Rights",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Library Management System",
    description: "A basic library management system for a librarian to easily keep track on the books and entries. Acts as an online companion for the librarian and reduces manual efforts.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/Athithyans/Lib-Management-Sys",
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
