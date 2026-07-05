// Mobile
import flutterLogo from './assets/tech_logo/flutter.svg';
import dartLogo from './assets/tech_logo/dart.svg';
import firebaseLogo from './assets/tech_logo/firebase.png';
import sqliteLogo from './assets/tech_logo/sqlite.svg';
import bluetoothLogo from './assets/tech_logo/bluetooth.svg';
import providerLogo from './assets/tech_logo/provider.svg';
import blocLogo from './assets/tech_logo/bloc.svg';
import restApiLogo from './assets/tech_logo/restapi.svg';

// Frontend
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import reactLogo from './assets/tech_logo/reactjs.png';
import nextLogo from './assets/tech_logo/nextjs.png';
import tailwindLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import materialLogo from './assets/tech_logo/materialui.png';

// Backend
import nodeLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/express.png';
import mongoLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';

// Languages
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cLogo from './assets/tech_logo/c.png';

// Tools
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import androidStudioLogo from './assets/tech_logo/androidstudio.svg';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';;
import glaLogo from './assets/company_logo/webverse_logo.png';
import liberinLogo from './assets/company_logo/liberin_logo.svg';
import resoluteaiLogo from './assets/company_logo/resoluteai_logo.svg';
import ignouLogo from './assets/company_logo/ignou_logo.svg';
import jimsLogo from './assets/company_logo/jims_logo.svg';
import stmarysLogo from './assets/company_logo/stmarys_logo.svg';
import polymartLogo from './assets/work_logo/polymart_logo.svg';
import olamWmsLogo from './assets/work_logo/olam_wms_logo.svg';
import zerodhaLogo from './assets/work_logo/zerodha_logo.svg';
import ecommerceMobileLogo from './assets/work_logo/ecommerce_mobile_logo.svg';
import weatherLogo from './assets/work_logo/weather_logo.svg';
import ecommerceWebLogo from './assets/work_logo/ecommerce_web_logo.svg';

  export const experiences = [
    {
      id: 0,
      img: liberinLogo,
      role: "Flutter Intern",
      company: "Liberin Technology",
      date: "June 2023 - August 2023",
      desc: "Worked on Flutter — wrote this thing.",
      skills: ["Flutter", "Dart", "Firebase", "SQLite"],
    },
    {
      id: 1,
      img: resoluteaiLogo,
      role: "Frontend Intern",
      company: "ResoluteAI",
      date: "September 2022 - December 2022",
      desc: "Built responsive web interfaces using React, implemented components, and collaborated on API integration and testing.",
      skills: ["Flutter", "Dart", "Firebase", "SQLite","Bloc"],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ignouLogo,
      school: "Indira Gandhi National Open University (IGNOU)",
      date: "Currently pursuing",
      grade: "Master of Computer Applications (MCA)",
      desc: "Currently pursuing a Master's degree in Computer Applications, focusing on software development, programming, data structures, databases, and modern application development.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: jimsLogo,
      school: "Jagannath International Management School (JIMS), Vasant Kunj",
      date: "Completed",
      grade: "Bachelor's Degree",
      desc: "Completed my undergraduate studies, building a strong foundation in computer science, software engineering, and problem-solving while working on practical development projects.",
      degree: "Bachelor's Degree",
    },
    {
      id: 2,
      img: stmarysLogo,
      school: "St. Mary's School",
      date: "Completed",
      grade: "School Education",
      desc: "Completed my school education with a strong academic foundation that fostered analytical thinking, discipline, and a passion for technology.",
      degree: "School Education",
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "PolyMart Unified Platform",
    description:
      "A dual-role B2B marketplace application and administration portal. Features cross-platform Flutter workflows for buyers and sellers with dynamic JSON-driven layouts, strict GST/KYC user verification, automated multi-grade inquiries, and interactive analytics tracking the correlation between polymer prices, crude oil, and currency metrics.",
    image: polymartLogo,
    tags: ["Flutter", "React.js", "Node.js", "MongoDB", "Chart.js", "WhatsApp API"],
    github: "https://github.com/yashasviwadhwa",
  },
  {
    id: 1,
    title: "Warehouse Management System (Olam WMS)",
    description:
      "A production-ready logistics and enterprise resource planning application developed for ResoluteAI. Streamlines supply chain pipelines by managing inventory, stock movement, receiving, and dispatch with integrated high-speed barcode/QR code scanner modules, runtime permission handlers, and BLoC-driven state operations.",
    image: olamWmsLogo,
    tags: ["Flutter", "Dart", "BLoC Architecture", "Mobile Scanner", "Permission Handler"],
    github: "https://github.com/yashasviwadhwa",
  },
  {
    id: 2,
    title: "Zerodha UI Clone",
    description:
      "A pixel-perfect, highly responsive replication of the popular Zerodha Kite trading interface. Focused deeply on clean layout design principles, custom user dashboard widgets, and a fully fluid, break-point optimized navigation flow.",
    image: zerodhaLogo,
    tags: ["React.js", "Bootstrap 5", "JavaScript", "Responsive UI", "CSS Grid"],
    github: "https://github.com/yashasviwadhwa",
  },
  {
    id: 3,
    title: "E-Commerce Mobile Suite",
    description:
      "A modular mobile commerce software suite equipped with structural dependency injections and clean repository layers. Features seamless Firebase Authentication flows and streamlined network requests using Dio interceptors.",
    image: ecommerceMobileLogo,
    tags: ["Flutter", "GetX", "Dio", "Firebase Auth", "Clean Architecture"],
    github: "https://github.com/yashasviwadhwa",
  },
  {
    id: 4,
    title: "Weather Application",
    description:
      "A real-time weather analytics application featuring optimized async data fetching and aggressive background data caching to reduce layout jank and redundant network polling.",
    image: weatherLogo,
    tags: ["React.js", "TypeScript", "TanStack Query", "Tailwind CSS", "ShadCN UI"],
    github: "https://github.com/yashasviwadhwa",
  },
  {
    id: 5,
    title: "E-Commerce Platform (Web)",
    description:
      "A full-featured web digital marketplace. Implements complex product cataloging architectures, centralized reactive shopping carts, and dynamic frontend page routing.",
    image: ecommerceWebLogo,
    tags: ["React.js", "Context API", "HTML5", "CSS3 Animations", "React Router"],
    github: "https://github.com/yashasviwadhwa",
  }
];

export const SkillsInfo = [
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", logo: flutterLogo },
      { name: "Dart", logo: dartLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "SQLite", logo: sqliteLogo },
      { name: "Bluetooth", logo: bluetoothLogo },
      { name: "Provider", logo: providerLogo },
      { name: "BLoC", logo: blocLogo },
      { name: "REST API", logo: restApiLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React", logo: reactLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Material UI", logo: materialLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express", logo: expressLogo },
      { name: "MongoDB", logo: mongoLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  // {
  //   title: "Languages",
  //   skills: [
  //     { name: "Python", logo: pythonLogo },
  //     { name: "Java", logo: javaLogo },
  //     { name: "C++", logo: cppLogo },
  //     { name: "C", logo: cLogo },
  //   ],
  // },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Android Studio", logo: androidStudioLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];