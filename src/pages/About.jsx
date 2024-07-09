import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { skills } from '../constants';
import { experiences } from '../constants';
import CTA from '../components/CTA';


const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Harsh</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>“As a prospective Computer Engineer based in India, I am currently pursuing my education at Charusat. My journey has been enriched by hands-on learning experiences, and my passion for building projects fuels my drive. With each line of code and every circuit connection, I am shaping my path toward innovation and impact.” 🌟
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (

            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src = {skill.imageUrl}
                  alt= {skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          “While my industry experience is still in its nascent stages, my internships have been pivotal in providing me with exposure and essential skills. These practical encounters have equipped me with the tools needed to navigate the professional landscape. As I continue my journey, I remain committed to learning and contributing effectively.” 
          </p>
          </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>

            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center h-full w-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}

                iconStyle={{ background: experience.iconBg }}

                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >

                <div>

                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>

                  <p className='text-black-500 font-base' stye={{margin:0}}>

                    {experience.company_name}
                  
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>

                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500-50 font-normal pl-1 text-sm'>

                      {point}

                    </li>
                  ))}

                </ul>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>

      <CTA />

    </section>
  )
}

export default About