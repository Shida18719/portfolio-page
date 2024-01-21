import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import evInnovationImg from "@/public/evinnovation-image.png";
import arithmeticQuizImg from "@/public/mental-arithmetic-quiz.png";
import vocabLogImg from "@/public/vocab-log.png";
import deskHqImg from "@/public/desk-hq.png";
import predictHousePriceImg from "@/public/predict-house-price.png";
// import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated BootCamp",
    location: "London, UK",
    description:
      "I graduated after 12 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Developer",
    location: "London, UK",
    description:
    "I'm working to continuously expand my skill set. My stacks includes JavaScript, Python, HTML, CSS, Bootstrap and Django. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "London, UK",
  //   description:
  //     "I'm now a full-stack developer working to continuously expand my skill set. My stack includes React, Next.js, TypeScript, Tailwindgi. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2023 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "EvInnovation",
    description:
      "My first Portfolio Project. A static web page about the future of Electric Vehicles (EV). Users can learn about electronic vehicles.",
    tags: ["HTML5", "CSS"],
    imageUrl: evInnovationImg,
  },
  {
    title: "Mental Arithmetic Quiz",
    description:
      "An interactive mental arithmetics quiz that test how quick you can solve maths questions mentally with varying levels.",
    tags: ["HTML5", "CSS", "JavaScript"],
    imageUrl: arithmeticQuizImg,
  },
  {
    title: "Vocabulary Log",
    description:
      "A command line User Interface that logs and displays user’s new vocabulary words. User can input new vocabulary to get the meaning and able to log it.",
    tags: ["Python", "PyDictionary", "Python Ascii Art"],
    imageUrl: vocabLogImg,
  },
  {
    title: "Desk HQ",
    description:
      "An Office Space Booking System Application. User can book workspace based on their preferred location and type of workspace.",
    tags: ["HTML5", "Bootstrap", "CSS", "Python", "Django", "JavaScript", "ElephantSQL"],
    imageUrl: deskHqImg,
  },
  {
    title: "Predict House Price",
    description:
      "A Machine Learning Web App. Uses dashboard where user can access and interact with a range of options to generate prediction for house price that meets their requirements.",
    tags: ["Python", "Jupyter", "NumPy", "Pandas", "MatPlotLib", "SkLearn", "StreamLit"],
    imageUrl: predictHousePriceImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "BootStrap",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Jupyter",
  "Pandas",
  "MatPlotLib",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;