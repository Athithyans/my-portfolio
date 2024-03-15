"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>MongoDb</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>UI/UX</li>
        <li>Digital Marketing</li>
      </ul>
    ),
  },
  {
    title: "Soft skills",
    id: "Soft skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Problem Solving</li>
        <li>Emotional Intelligence</li>
        <li>Negotiation</li>
        <li>Communication</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pursuing Bachelors in Computer Science and Engineering at RVS Technical Campus.</li>
        <li>Completed Schoolings in Sacred Heart Matriculation Hr. Sec. School.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete NextJs</li>
        <li>Practical Web development</li>
        <li>Executive Diploma in marketing management</li>
      </ul>
    ),
  },
  {
    title: "Internships",
    id: "internships",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Goldman Sachs - Software Engineering: </strong> <p>Cultivated software development expertise during an internship at Goldman Sachs,
a global financial leader. Collaborated on critical projects, honing problem-solving
skills and contributing to innovative solutions. Delivered results in a dynamic, highpressure environment, 
showcasing adaptability and teamwork. </p> 
</li>

        <li><strong>Accenture - Data Analytics and Visualization: </strong> <p>Gained proficiency in data analysis and visualization during an internship at
Accenture, a prominent consulting firm. Extracted actionable insights from
Complex datasets, translating data into strategic solutions. Played a pivotal role in
Enhancing data-driven decision-making, showcasing strong analytical and
Visualization skills.</p>
</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} className="rounded-md"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As an enthusiastic full stack web developer, 
          I thrive on crafting dynamic and engaging web applications that captivate users. 
          My expertise spans a wide range of technologies including JavaScript, React, Redux, Node.js, Express, MongoDb,
          PostgreSQL, HTML, CSS, and Git. 
          My insatiable thirst for learning drives me to constantly seek out new challenges and expand my skill set. 
          I am a collaborative team player who is eager to collaborate 
          with others in the pursuit of creating outstanding applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Soft skills")}
              active={tab === "Soft skills"}
            >
              {" "}
              Soft skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("internships")}
              active={tab === "internships"}
            >
              {" "}
              Internships{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
