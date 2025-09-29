"use client"

import ProjectItem from "./projectItem"
import MiniProjectItem from "./miniProjectItem"

const projectsObject = [
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

const miniProjectObj = [
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

const ProjectsComponents = () => (
  <section id="Projects" className="w-full py-12 bg-black text-white ">
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide">Relevant Projects</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projectsObject.map((projectItem) => (
          <ProjectItem key={projectItem.id} projectItem={projectItem} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">Mini Projects</h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjectObj.map((projectItem) => (
          <MiniProjectItem key={projectItem.id} eachOne={projectItem} />
        ))}
      </ul>
    </div>
  </section>
)

export default ProjectsComponents
