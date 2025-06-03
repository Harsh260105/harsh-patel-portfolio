import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import { skills } from "../constants";
import { experiences } from "../constants";
import { socialLinks } from "../constants";
import CTA from "../components/CTA";
import Resume from "../../HARSH-PATEL-Resume.pdf";
import PageTransition from "../components/PageTransition.jsx";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  // Group skills by type
  const skillsByType = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <PageTransition>
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            <ReactTypingEffect
              text={[
                "Harsh",
                "a Developer",
                "a Computer Engineer",
                "a Tech Enthusiast",
                "a Learner",
              ]}
              speed={125}
              eraseSpeed={100}
              typingDelay={500}
              eraseDelay={1300}
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              displayTextRenderer={(text) => {
                return <span>{text}</span>;
              }}
            />
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            “I'm a Computer Engineering student at Charusat who loves turning
            ideas into impactful digital experiences. Building projects from the
            ground up — whether it's a platform, a tool, or a small feature — is
            where I learn best. Through internships, team projects, and
            technical events, I've had the chance to apply what I learn in real
            scenarios and grow with every challenge. I'm especially drawn to how
            the cloud and DevOps bring everything together — helping developers
            build smarter, ship faster, and scale with confidence. What drives
            me is the process: learning something new, building with it, and
            seeing it make a difference. Tech is my playground — and I'm here to
            keep building, exploring, and evolving. ” 🌟
          </p>
          <a
            className="btn mt-4"
            style={{ width: "150px" }}
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get My Resume
          </a>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-col gap-12">
            {Object.entries(skillsByType).map(([type, typeSkills]) => (
              <div key={type} className="flex flex-col gap-4">
                <h4 className="text-xl font-poppins font-semibold text-slate-600 mb-4">
                  {type}
                </h4>
                <div className="flex flex-wrap gap-12">
                  {typeSkills.map((skill) => (
                    <div key={skill.name} className="block-container w-20 h-20">
                      <div className="btn-back rounded-xl" />
                      <div className="btn-front rounded-xl flex justify-center items-center">
                        <img
                          src={skill.imageUrl}
                          alt={skill.name}
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              “While my industry experience is still in its nascent stages, my
              internships have been pivotal in providing me with exposure and
              essential skills. These practical encounters have equipped me with
              the tools needed to navigate the professional landscape. As I
              continue my journey, I remain committed to learning and
              contributing effectively.”
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center h-full w-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[80%] h-[80%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>

                    <p
                      className="text-black-500 font-base"
                      stye={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500-50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Socials</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {socialLinks.map((Socials) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    onClick={() => window.open(Socials.link, "_blank")}
                    src={Socials.iconUrl}
                    alt={Socials.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </PageTransition>
  );
};

export default About;
