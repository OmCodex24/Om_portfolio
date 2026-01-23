// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javascriptLogo2 from './assets/tech_logo/javascript.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import sinlogo from './assets/education_logo/sinhgad_logo.png';
import sanlogo from './assets/education_logo/sanskar_logo.png';
import champavatiLogo from './assets/education_logo/cham_logo.png';

// Project Section Logo's
import spotifyCloneLogo from './assets/work_logo/spotify_clone.png';
import passwordManagerLogo from './assets/work_logo/password_manager.png';
import todologo from './assets/work_logo/todo.png';
import musicLogo from './assets/work_logo/music.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo2 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [];

export const education = [
  {
    id: 0,
    img: sinlogo,
    school: "SMT. Kashibai Navale College Of Engineering , Pune",
    date: "Sept 2022 - Aug 2026",
    grade: "8.8 CGPA",
    desc: "I am pursuing my Bachelor's degree (BSC) in Computer Science from smt. Kashibai Navale clg of Engineering , Pune . ",
    degree: "B.TECH(CSE) - Computer Science",
  },
  {
    id: 1,
    img: champavatiLogo,
    school: "Champavati junior Highschool , Beed (Maharashtra)",
    date: "Apr 2021 - March 2022",
    grade: "85.33%",
    desc: "I completed my class 12 education from Champavati junior Highschool , under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) ",
    degree: "HSC(XII) - PCM ",
  },
  {
    id: 2,
    img: sanlogo,
    school: "Sanskar Vidyalaya , Beed (Maharashtra)",
    date: "Apr 2019 - March 2020",
    grade: "94.40%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "SSC(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Spotify Clone",
    description:
      "A responsive music player UI inspired by Spotify, built using HTML, CSS, and JavaScript...",
    image: spotifyCloneLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/tantrik-Om/Spotify_clone.git",
    webapp: "",
  },
  {
    id: 1,
    title: "Password Manager",
    description:
      "A full-stack password management application built using React, Tailwind CSS...",
    image: passwordManagerLogo,
    tags: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/OmCodex24/Passwork-Manager",
    webapp: "",
  },
  {
    id: 2,
    title: "Todo App – Helpdesk Task Manager",
    description:
      "A simple and user-friendly Todo List web application built using React...",
    image: todologo,
    tags: ["React", "Tailwind CSS", "React Toastify", "React Icons", "Vite"],
    github: "https://github.com/tantrik-Om/Todo-Helpdesk-Task-Manager",
    webapp: "",
  },
  {
    id: 3,
    title: "MusicVerse – Animated Music Experience",
    description:
      "A visually immersive and animation-rich music website built with Next.js...",
    image: musicLogo,
    tags: ["Next.js", "React", "Tailwind CSS", "Aceternity UI", "Framer Motion"],
    github: "https://github.com/your-repo-link",
    webapp: "",
  }
];
