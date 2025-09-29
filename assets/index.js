import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiNodedotjs, SiExpress, SiFastify, SiPostgresql, SiMongodb, SiElasticsearch, SiApachekafka, SiApachejmeter, SiGit, SiGithub, SiJira, SiConfluence, SiPm2, SiPostman } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiRedis } from "react-icons/di";

export const techStackIcons = [
  { icon: AiFillHtml5, label: "HTML" },
  { icon: IoLogoCss3, label: "CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: GrReactjs, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiFastify, label: "Fastify" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: DiRedis, label: "Redis" },
  { icon: SiElasticsearch, label: "Elasticsearch" },
  { icon: SiApachekafka, label: "Kafka" },
  { icon: SiApachejmeter, label: "JMeter" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiJira, label: "Jira" },
  { icon: SiConfluence, label: "Confluence" },
  { icon: SiPm2, label: "PM2" },
  { icon: SiPostman, label: "Postman" },
];


export const sampleval = "sample text"

export const experiences = [
  {
    title: "Marriage Registration Module",
    overview: [
      "I have been working on a government project focused on developing a web application for civil court services. This application includes various modules such as land registration, firm and society registration, and marriage registration. Among these, the marriage registration module was the second largest, following the land registration module.",
      "Since the beginning of my tenure, I have been actively involved in the marriage module, handling its complete workflow and implementation."
    ],
    roles: [
      {
        role: "Citizen",
        responsibilities: [
          "Registers the details of the bride and bridegroom.",
          "Makes the necessary payments for application submission and registration."
        ]
      },
      {
        role: "Assistant to the Sub-Registrar",
        responsibilities: [
          "Verifies the details of the bride and bridegroom.",
          "Has the authority to approve applications or send them back for corrections.",
          "Forwards the application to the Sub-Registrar if all details are correct."
        ]
      },
      {
        role: "Sub-Registrar (SRO)",
        responsibilities: [
          "Reviews the application and verifies details.",
          "Can reject, send back, or approve applications.",
          "Approved applications enter a 30-day notice period for objections."
        ]
      },
      {
        role: "Operator to the Sub-Registrar (OSR)",
        responsibilities: [
          "Handles biometric verification (eKYC).",
          "Manages final storage and record-keeping of marriage certificates."
        ]
      }
    ],
    workflow: [
      "Application Submission: Citizen provides details and makes payment.",
      "Initial Verification: Assistant verifies details and approves or sends for corrections.",
      "Sub-Registrar Review: Application is reviewed and either approved, rejected, or sent for corrections.",
      "Notice Period: Approved applications undergo a 30-day objection period.",
      "Post-Notice Processing: If no objections remain, the citizen can book an appointment.",
      "Appointment & Witness Verification: All parties appear for verification.",
      "Final Biometric Verification & Certification: eKYC is completed, and the marriage certificate is issued."
    ],
    technical: [
      "Cron scheduler manages automated workflows like status updates and notice period handling.",
      "Secure data handling ensures compliance with legal requirements.",
      "This project provided me with extensive experience in government-based web applications, workflow automation, and secure document processing."
    ]
  },
  {
    title: "Premutation Module (MP Land Transaction Project)",
    overview: [
      "I have also worked on the Premutation Module, which is a critical part of the MP Government's land transaction system. This module facilitates the process where a seller or buyer submits a land sketch to the IGRS department to indicate the part of the land they intend to buy or sell."
    ],
    roles: [
      {
        role: "Key Responsibilities",
        responsibilities: [
          "Developed and maintained the Premutation Module, which facilitates the sale and purchase of land by verifying and storing transaction records.",
          "Integrated GIS-based land selection, enabling users to select land partitions visually through a GIS interface.",
          "Designed and optimized a system for managing land records, tracking owners' and buyers' data to maintain accurate transaction history.",
          "Integrated real-time land validation checks, ensuring the land is not undergoing any other transaction before allowing selection.",
          "Worked closely with the frontend, testing, and GIS teams to ensure a seamless selection and verification process.",
          "Integrated payment validation and access restrictions, ensuring that once a user selects a land partition, others cannot modify it.",
          "If payment is not completed within 48 hours, the application is automatically removed, and the land is made available again.",
          "If payment is made but the user leaves the application for 72 hours, it is automatically rejected.",
          "Automated time-sensitive processes using a cron scheduler, ensuring proper land allocation and preventing fraudulent transactions.",
          "Optimized database queries with Knex.js, improving data retrieval efficiency for high-volume transactions.",
          "Integrated Redis caching for storing temporary land transaction records and reducing load on PostgreSQL.",
          "Maintained security and compliance with government policies by implementing strict validation and authorization mechanisms."
        ]
      }
    ],
    workflow: [
      "Seller or buyer submits land sketch to indicate the part of the land intended for sale/purchase.",
      "System checks real-time availability to prevent double transactions.",
      "Payment validation ensures the transaction is only finalized if completed within the allowed time.",
      "GIS interface allows users to visually select land partitions.",
      "System updates transaction status and notifies relevant stakeholders."
    ],
    technical: [
      "Backend implemented with Node.js and Express.js.",
      "Optimized database queries using Knex.js for high-volume transaction handling.",
      "Redis caching used for temporary data to reduce load on PostgreSQL.",
      "Cron jobs manage automated workflows like status updates and payment deadlines.",
      "Ensured strict compliance with government security and authorization protocols."
    ]
  }
];


export const projectsObject = [
   {
  id: '7',
  projectTitle: 'AI Interview Coach',
  thumbnail:
    'https://res.cloudinary.com/dzapdxkgc/image/upload/v1748419200/ai-interview-coach-thumbnail.png',
  thumbnails: [
    {
      id: 1,
      imgUrl:
        'https://res.cloudinary.com/dzapdxkgc/image/upload/v1748419200/ai-interview-coach-thumbnail.png',
    },
  ],
  projectLink: 'https://interviewguideai.netlify.app/',
  projectAbt:
    'An AI-powered platform designed to help job seekers practice technical and behavioral interview questions. It provides instant feedback, performance analytics, and personalized improvement suggestions to enhance interview readiness.',
  projectKeyPoints: [
    'AI-driven real-time interview simulation for technical and HR rounds.',
    'Detailed performance analytics with strengths and improvement areas.',
    'Voice-based interaction to simulate real interview experience.',
    'Feedback on communication skills, clarity, and confidence.',
    'Adaptive difficulty — questions scale with user performance.',
    'Save and review past mock interviews for continuous learning.',
    'Integrated with cloud deployment for seamless accessibility.',
    'Admin panel to add, update, and categorize interview questions.',
    'Supports coding, system design, and behavioral interview practice.',
  ],
  technologiesUsed:
    ' React.js, Next.js, Tailwind CSS, Node.js, Express.js, PostgreSQL, OpenAI API(Gemini),AWS EC2, Netlify',
  gitHubLink: 'https://docs.google.com/document/d/1ypTPkgMJO2eGj0uj0H0y0PmKFjz2HwlINtBf3T7W0Xw/edit?usp=sharing',
  docUrl: 'https://docs.google.com/document/d/1ypTPkgMJO2eGj0uj0H0y0PmKFjz2HwlINtBf3T7W0Xw/edit?usp=sharing',
},
  {
    id: '6',
    projectTitle: 'Collaborative Whiteboard',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1742734934/Screenshot_2025-03-23_183058_wdyz0i.png',
    thumbnails: [
      {
        id: 1,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743326822/Screenshot_2025-03-30_144752_stk7ta.png',
      },
      {
        id: 2,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743326822/Screenshot_2025-03-30_144809_l7vw43.png',
      },
      {
        id: 3,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743326823/Screenshot_2025-03-30_145001_io6kh9.png',
      },
      {
        id: 4,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743326823/Screenshot_2025-03-30_145015_qknv8r.png',
      },
      {
        id: 5,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743326823/Screenshot_2025-03-30_145205_nmn04t.png',
      },
    ],
    projectLink: 'https://qrauthnext.netlify.app/white-board',
    projectAbt:
      'The Collaborative Whiteboard is a real-time, room-based whiteboard application designed for seamless collaboration. It allows users to create private rooms, draw, erase, chat, and interact with a shared canvas efficiently. The backend is powered by Fastify, Redis is used for managing rooms and storing whiteboard data, and the frontend is built with Next.js.',
    projectKeyPoints: [
      'Real-time Drawing: Users can draw, erase, and interact on a shared canvas.',
      'Room-based Collaboration: Private rooms ensure isolated workspaces.',
      'Persistence: Whiteboard data is stored in Redis for quick access and PostgreSQL for long-term storage.',
      'Authentication & Authorization: Secure access to rooms with user authentication.',
      'Chat Feature: Users can send and receive messages within a room for better collaboration.',
      'Performance Optimizations: Efficient data handling with WebSockets and Redis.',
      'Rich UI with ShadCN: Uses shadcn/ui components for a modern and industry-standard interface.',
      'Reusable Components: Follows modular design principles for maintainability.',
    ],
    technologiesUsed:
      'shadcn(Ui), WebSocket(server), socket.io(client), canvas, Fastify, NextJs, NodeJs, PostgreSQL, CryptoJs, JWT, Docker, PM2, Redis, Google Cloud VPS',
    credentials: 'Register to explore the features',
    gitHubLink: 'https://github.com/navinO0/qr-login-nextjs',
    docUrl:
      'https://docs.google.com/document/d/1qNEsQeGCl6tsiLveSEfaAZ9iHfRl_lXDkB-S-EQ5zYE/edit?usp=sharing',
  },
  {
    id: '1',
    projectTitle: 'Add Secondary Devices with QR',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1742734934/Screenshot_2025-03-23_183058_wdyz0i.png',
    thumbnails: [
      {
        id: 1,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743325017/Screenshot_2025-03-30_142533_ruclwu.png',
      },
      {
        id: 2,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743325017/Screenshot_2025-03-30_142559_k0eau9.png',
      },
      {
        id: 3,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743325017/Screenshot_2025-03-30_142547_fprkm2.png',
      },
      {
        id: 4,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743325018/Screenshot_2025-03-30_142636_svzuaq.png',
      },
      {
        id: 5,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743326182/Screenshot_2025-03-30_144607_wh5ifn.png',
      },
    ],
    projectLink: 'https://qrauthnext.netlify.app/login',
    projectAbt: '',
    projectKeyPoints: [
      'Implemented Multi-Device Authentication: Designed a secure QR-based authentication system, allowing users to link up to two secondary devices per session.',
      'Developed Secure Session Management: Enforced a 1-hour session timeout and 3-minute QR code validity to enhance security and prevent unauthorized access.',
      'Built Protected Routes: Ensured that only authenticated users could access secured features using JWT-based authentication.',
      'Optimized Performance with Redis & PM2: Integrated Redis for session caching and PM2 for process management, improving system reliability.',
      'Deployed on Google Cloud VPS with Docker: Used containerization for scalable and consistent deployment across environments.',
      'Designed Modular & Reusable UI Components: Created a Next.js-based frontend with reusable UI elements for maintainability.',
      'Implemented Secure Data Handling: Used CryptoJS for encryption and hashing, ensuring the safe transmission of authentication data.',
      'Enhanced Real-World Security Use Cases: Applied authentication methods suitable for banking apps, streaming services, gaming, IoT, and enterprise security.',
    ],
    technologiesUsed:
      'NextJs, NodeJs, PostgreSQL, CryptoJs, JWT, Docker, PM2, Redis, Google Cloud VPS',
    credentials: 'Register to explore the features',
    gitHubLink: 'https://github.com/navinO0/qr-login-nextjs',
    docUrl:
      'https://docs.google.com/document/d/1Bb0g5ykZHx7m4rF0agJktDAViPVc8E3SZA1fWjzeQPY/edit?usp=sharing',
  },
  {
    id: '2',
    projectTitle: 'Movies App (Netflix/Amazon Prime Clone)',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682670452/Screenshot_2023-04-27_165404_norkzl.png',
    thumbnails: [
      {
        id: 1,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743323989/Screenshot_2025-03-30_135525_fs1jft.png',
      },
      {
        id: 2,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743323985/Screenshot_2025-03-30_135551_ne1a3z.png',
      },
      {
        id: 3,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743323982/Screenshot_2025-03-30_135627_zlhacm.png',
      },
      {
        id: 4,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743323989/Screenshot_2025-03-30_135614_zr3p0s.png',
      },
      {
        id: 5,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743323990/Screenshot_2025-03-30_135711_zye4ik.png',
      },
      {
        id: 6,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743323991/Screenshot_2025-03-30_135640_ojaclf.png',
      },
    ],
    projectLink: 'https://minipronavin.ccbp.tech',
    projectAbt:
      'Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, and also can search movies and view specific movie details',
    projectKeyPoints: [
      'Implemented different routes for features like login, home, popular, profile by using React Router components Route, Switch, Link',
      'Implemented horizontal scrolling (In trending, top-rated, and originals sections) using React Third Party library called React Slick.',
      'Used Figma mockups to implement UI-rich and pixel-perfect React components.',
      'Explored open-source APIs for movies database and picked TMDb APIs for authentication, movies by category, and movie search APIs',
      ' Implemented username and password authentication and persisted login state using client storage.',
      'Implemented a protected route to ensure only authenticated users can access the pages like user profile, movies by category, etc.',
    ],
    technologiesUsed:
      ' HTML, CSS, JavaScript, React JS, Bootstrap, React Slick, Figma, client storage',
    credentials: 'Username : rahul  And  Password : rahul@2021',
    gitHubLink: 'https://github.com/navinO0/Movies-App.git',
    docUrl: null,
  },
  {
    id: '3',
    projectTitle: 'Nxt Watch',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682699386/Screenshot_2023-04-27_190648_aggiwl.png',
    thumbnails: [
      {
        id: 1,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324406/Screenshot_2025-03-30_141516_apmbda.png',
      },
      {
        id: 2,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324401/Screenshot_2025-03-30_141527_houszu.png',
      },
      {
        id: 3,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324406/Screenshot_2025-03-30_141538_nkln5d.png',
      },
      {
        id: 4,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324400/Screenshot_2025-03-30_141548_jdos7n.png',
      },
      {
        id: 5,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324523/Screenshot_2025-03-30_141821_fzdkdx.png',
      },
    ],
    projectLink: 'https://nxtwatchnvin.ccbp.tech',
    projectAbt:
      'Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).',
    projectKeyPoints: [
      'Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React components, props, state, lists, event handlers, form inputs.',
      'Authenticating by taking username, password and doing login post HTTP API Call.',
      'Persisted user login state by keeping jwt token in local storage, Sending it in headers of further API calls to authorize the user.',
      'Implemented different routes for Login, Home, Trending, Gaming, Saved videos, Video item details pages by using React Router components Route, Switch, Link.',
      ' Redirecting to the login page if the user tries to open Home, Trending, Gaming, Saved videos, Video item details routes which need authentication by implementing protected Route.',
    ],
    technologiesUsed:
      ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,Authorization, Authentication',
    credentials: 'Username : rahul  And  Password : rahul@2021',
    gitHubLink: 'https://github.com/navinO0/NxtWatch.git',
    docUrl: null,
  },
  // {
  //   id: '4',
  //   projectTitle: 'Jobby App',
  //   thumbnail:
  //     'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682670459/Screenshot_2023-04-27_191050_wyv8n8.png',
  //   thumbnails: [
  //     {
  //       id: 1,
  //       imgUrl:
  //         'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324712/Screenshot_2025-03-30_142057_xstuac.png',
  //     },
  //     {
  //       id: 2,
  //       imgUrl:
  //         'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324713/Screenshot_2025-03-30_142110_bfponv.png',
  //     },
  //     {
  //       id: 3,
  //       imgUrl:
  //         'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324713/Screenshot_2025-03-30_142123_fzo3wn.png',
  //     },
  //     {
  //       id: 4,
  //       imgUrl:
  //         'https://res.cloudinary.com/dzapdxkgc/image/upload/v1743324713/Screenshot_2025-03-30_142135_yotqb9.png',
  //     },
  //   ],
  //   projectLink: 'https://jobbynavin.ccbp.tech/',
  //   projectAbt:
  //     'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc',
  //   projectKeyPoints: [
  //     ' Implemented different pages like Login, Home, Jobs, Job item details using React components, props, state, lists, event handlers, form inputs.',
  //     ' Authenticating by taking username, password and doing login post HTTP API Call.',
  //     ' Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user.',
  //     'Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.',
  //     ' Implemented filters and search text by sending them as query parameters to jobs API calls.',
  //     'Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which need authentication by implementing protected Route.',
  //   ],
  //   technologiesUsed:
  //     ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication',
  //   credentials: 'Username : rahul   And  Password : rahul@2021',
  //   gitHubLink: 'https://github.com/navinO0/jobbyApp.git',
  //   docUrl: null,
  // },
  {
    id: '5',
    projectTitle: 'Form Validation',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1683199213/Screenshot_2023-05-04_164920_ll7jss.png',
    thumbnails: [
      {
        id: 1,
        imgUrl:
          'https://res.cloudinary.com/dzapdxkgc/image/upload/v1683199213/Screenshot_2023-05-04_164920_ll7jss.png',
      },
    ],
    projectLink: 'https://form-validation-by-navin.netlify.app/',
    projectAbt:
      'Implemented simple form where user can register their details and view the registered users details.And user can search for a particular person details using search component.',
    projectKeyPoints: [
      'Validation Features:',
      'Name, age, gender are Required fields',
      'Mobile And Emergency Contact number which Accepts Valid Indian Number',

      'If Govt ID type is aadhaar the govt id will only accepts digits and length should be 12 digits.',
      'If Govt ID type is PAN will accepts alpha Numerics and length should be 10  characters.',
      'Implemented different Routes like register route where user can register their details And users route where user can see the registered users list.',
      ' Implemented Backend services like GET and POST. In the POST request the Users details is stored the database and In GET request it will give all the users details present in the Database.',
      ' Components And Hooks Used:',
      'React Form Hook, Axios, React-Datatable, React-csv,React-Router, Yup validation library.',
    ],
    technologiesUsed:
      ' React JS, JS, CSS, Routing, REST API Calls, Node, Express.js, sqlite',
    gitHubLink: 'https://github.com/navinO0/form-validation-frontend.git',
    docUrl: null,
  },
 
]

export const miniProjectObj = [
  {
    id: '1',
    projectTitle: 'Emoji Game',

    projectLink: 'https://navinemogame.ccbp.tech/',
    gitHubLink: 'https://github.com/navinO0/emoji-game.git',
    projectAbt:
      'Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each click',
    technologiesUsed: ' React JS, CSS, Bootstrap',
  },
  {
    id: '2',
    projectTitle: 'Mini Games (Match Game)',

    projectLink: 'https://matchgme.ccbp.tech/',
    gitHubLink: 'https://github.com/navinO0/matchGame.git',
    projectAbt:
      'Developed responsive image memory game where users can increase their Score by clicking matching image with the displayed random image each time till all displayed images are clicked.',
    technologiesUsed: ' React JS, CSS, Bootstrap',
    docUrl: null,
  },
  {
    id: '3',
    projectTitle: 'Mini Games (Rock paper Scissors)',

    projectLink: 'https://rpcgamenavin.ccbp.tech/',
    gitHubLink: 'https://github.com/navinO0/Rock-Paper-Scissor-game.git',
    projectAbt:
      'Rock, Paper, Scissors. The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.',
    technologiesUsed: ' React JS, CSS, Bootstrap',
    docUrl: null,
  },
]

