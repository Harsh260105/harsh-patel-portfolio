import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import PageTransition from "../components/PageTransition.jsx";

const Projects = () => {
  return (
    <PageTransition>
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-400">
          <p>
            Over this 2 years, I've undertaken many projects, but the ones
            dearest to me are listed here. All are open-source, and should you
            find any that capture your interest, you're welcome to delve into
            the codebase and offer your insights for its improvement. Your
            contributions are greatly appreciated!
          </p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div
              className="lg:w-[400px] w-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl p-10"
              key={project.name}
            >
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold dark:text-white">
                  {project.name}
                </h4>
                <div className="mt-3 mb-3">
                  <h5 className="text-base font-poppins font-semibold text-slate-600 dark:text-slate-300">
                    Tech Stack:
                  </h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {project.techStack}
                  </p>
                </div>
                <ul className="mt-2 text-slate-500 dark:text-slate-400 list-disc pl-6 space-y-2">
                  {project.description.map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-300 dark:border-gray-700" />

        <CTA variant="projects" />
      </section>
    </PageTransition>
  );
};

export default Projects;
