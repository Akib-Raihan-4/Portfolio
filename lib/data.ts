import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import EduBot from "@/public/EduBot.png";
import Potato from "@/public/PotatoDisease.png"
import Attendance from "@/public/Attendance.png"
import Weather from "@/public/Weather.png"
import Selfie from "@/public/MediaPic.png"
import DevTech from "@/public/DevTech.png"

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;



export const projectsData = [
  {
    title: "Edu Chatbot",
    description:
      "EduBot is an AI-powered chatbot designed to provide instant and accurate responses to university student queries.",
    tags: ["Python", "NLP", "NLTK ", "Keras", "Flask", "TensorFlow", "React"],
    href: "https://github.com/Akib-Raihan-4/EduBot",
    imageUrl: EduBot,
  },
  {
    title: "Potato Plant Disease Detection",
    description:
      "Potato Plant Disease Detection is a project aimed at detecting two major diseases in potato plants, namely Early Blight, Late Blight, and Healthy plants.",
    tags: ["Python", "CNN","Keras", "React","TensorFlow", "FastApi", "OpenCV" ],
    href: "https://github.com/Akib-Raihan-4/Potato_disease_prediction",
    imageUrl: Potato,
  },
  {
    title: "Face Recognition Attendance",
    description:
      "The Face Recognition Attendance System is a Python application that utilizes real-time face recognition to automate attendance tracking.",
    tags: ["Python", "Tkinter", "OpenCV", "Pyinstaller", "Face-Recognition"],
    href: "https://github.com/Akib-Raihan-4/Face_Recognition_Attendance",
    imageUrl: Attendance,
  },
  {
    title: "Weather App",
    description:
      "A simple Weather app that also shows the next 3 days' forecast. In this project I have use HTML, CSS and JS and also used a weather API.",
    tags: ["JavaScript", "HTML", "CSS"],
    href: "https://github.com/Akib-Raihan-4/Simple-Weather-App",
    imageUrl: Weather,
  },
  {
    title: "Taking Picture with Hand Gesture",
    description:
      "So here I used the MediaPipe Library in Python to develop a simple task of taking pictures using a webcam.",
    tags: ["Python", "MediaPipe", "OpenCV"],
    imageUrl: Selfie,
    href: "https://github.com/Akib-Raihan-4/Taking-Picture-Using-MediaPipe"
  },
  {
    title: "DevTech",
    description:
      "So here I used the MediaPipe Library in Python to develop a simple task of taking pictures using a webcam.",
    tags: ["PHP", "TailwindCSS", "HTML", "CSS", "MySQL"],
    href: "https://github.com/Akib-RaihanPop/DevTech.github.io",
    imageUrl: DevTech,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;