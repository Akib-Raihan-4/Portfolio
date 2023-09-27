import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import EduBot from "@/public/EduBot.png";
import Potato from "@/public/PotatoDisease.png"
import Attendance from "@/public/Attendance.png"
import CatWiki from "@/public/CatWiki.png"
import Selfie from "@/public/MediaPic.png"
import ADNdiginet from "@/public/ADNDiginet.webp"
import UnSplash from "@/public/UnSplash.png"

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
    title: "AI Trainee",
    // location: "Miami, FL",
    description:
      "I completed a 3-month AI traineeship at ADN Diginet, where I gained expertise in constructing AI models and their practical implementation in projects.",
    imageUrl: ADNdiginet,
    date: "2023",
  }
] as const;



export const projectsData = [
  
  {
    title: "Cat Wiki",
    description:
      "Here you can learn about cat breeds and the data are fetched from a Cat API. One can search cat breeds and know about the breeds and also see their images.",
    tags: ["NextJS", "Tailwind", "Firebase", "CSS"],
    href: "https://cat-wiki-akib.vercel.app",
    imageUrl: CatWiki,
  },
  {
    title: "UnSplash Gallery",
    description:
      "A gallery where you can add images through links and one can search specific images with it's name, and also delete.",
    tags: ["React", "NodeJS", "CSS", "ExpressJS", "Tailwind", "MongoDB Atlas"],
    href: "https://un-splash-gallery.vercel.app",
    imageUrl: UnSplash,
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
    title: "Edu Chatbot",
    description:
      "EduBot is an AI-powered chatbot designed to provide instant and accurate responses to university student queries.",
    tags: ["Python", "NLP", "NLTK ", "Keras", "Flask", "TensorFlow", "React"],
    href: "https://github.com/Akib-Raihan-4/EduBot",
    imageUrl: EduBot,
  },
  {
    title: "Taking Picture with Hand Gesture",
    description:
      "So here I used the MediaPipe Library in Python to develop a simple task of taking pictures using a webcam.",
    tags: ["Python", "MediaPipe", "OpenCV"],
    imageUrl: Selfie,
    href: "https://github.com/Akib-Raihan-4/Taking-Picture-Using-MediaPipe"
  },
  
] as const;

