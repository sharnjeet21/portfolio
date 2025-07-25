"use client";

import { projectsData } from '../../../utils/data/projects-data';
import ProjectCard from './project-card';
import VideoCarousel from './video-slider';
import { videos } from '../../../utils/data/videos';
const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2F2F2F] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="my-12 lg:my-16 relative">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <a
              id={`sticky-card-${index + 1}`}
              href={project.code}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
      <div className="flex items-center justify-start relative">
          <span className="bg-[#2F2F2F] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECT DEMO
          </span>
          <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
        </div>
        

      <div>
      <VideoCarousel videosData={videos} />
    </div> */}
    </div>
  );
};

export default Projects;