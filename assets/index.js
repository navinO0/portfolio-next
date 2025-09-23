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
