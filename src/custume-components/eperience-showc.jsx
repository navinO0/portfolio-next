"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceShowCaseCard = ({ experiences }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center bg-black text-white w-full py-12 px-4">
      <div className="max-w-6xl w-full space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden">
            {/* Header */}
            <div
              className="cursor-pointer  p-4 flex justify-between items-center"
              onClick={() => toggleSection(idx)}
            >
              <h1 className="text-xl md:text-2xl font-bold text-gray-300">{exp.title}</h1>
              <span className="text-gray-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className=" p-6 space-y-6"
                >
                  {/* Overview */}
                  {exp.overview && (
                    <section className="space-y-2">
                      {exp.overview.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  )}

                  {/* Roles */}
                  {exp.roles && (
                    <section className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-300">Roles</h2>
                      {exp.roles.map(({ role, responsibilities }, i) => (
                        <div key={i}>
                          <h3 className="text-lg font-medium text-white">{role}</h3>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            {responsibilities.map((resp, j) => (
                              <li key={j}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  )}

                  {/* Workflow */}
                  {exp.workflow && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-300 mb-2">Workflow</h2>
                      <ul className="list-disc pl-6 text-gray-300 space-y-1">
                        {exp.workflow.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Technical Implementation */}
                  {exp.technical && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-300 mb-2">
                        Technical Implementation
                      </h2>
                      <ul className="list-disc pl-6 text-gray-300 space-y-1">
                        {exp.technical.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceShowCaseCard;
