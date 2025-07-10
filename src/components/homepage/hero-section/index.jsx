// @flow strict
import { personalData } from "../../../utils/data/personal-data";
import { experiences } from "../../../utils/data/experience";
import { Link } from "react-router-dom"; import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between -mt-20 pt-28 pb-10 lg:pb-16">
      <img
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-10 -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className="text-[#FC1500]">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#3F926B]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
          <a
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#0a66c2] hover:scale-125 duration-300"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={30} />
            </a>
            
            <a
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#171515]  hover:scale-125 duration-300"
              rel="noopener noreferrer"
            >
              <BsGithub size={30} />
            </a>

            <a
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-[#FFA116] hover:scale-125 duration-300"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={30} />
            </a>
            <a
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-[#1DA1F2] hover:scale-125 duration-300"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={30} />
            </a>

            <a
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-[#1877F2] hover:scale-125 duration-300"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>


          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#FC1500] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </a>

            <a className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#046a38] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume} rel="noopener noreferrer"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>
          </div>

        </div>
        <div className="order-1 lg:order-2 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-[#23950A]"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base text-left">
              <div className="whitespace-pre text-pink-500">const <span className="text-white">coder</span> = <span className="text-gray-400">{'{'}</span></div>
              <div className="whitespace-pre"><span className="text-white">&nbsp;&nbsp;name:</span> <span className="text-gray-400">'</span><span className="text-amber-300">Sharnjeet Singh</span><span className="text-gray-400">',</span></div>
              <div className="whitespace-pre wrap text-wrap">
                <span className="text-white">&nbsp;&nbsp;skills:</span> <span className="text-gray-400">[</span>
                <span className="text-amber-300">'React'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'Python'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'C++'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'Express'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'Javascript'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'MySql'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'Node.js'</span><span className="text-gray-400">, </span>
                <span className="text-amber-300">'Docker'</span><span className="text-gray-400">],</span>
              </div>
              <div className="whitespace-pre"><span className="text-white">&nbsp;&nbsp;hardWorker:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span></div>
              <div className="whitespace-pre"><span className="text-white">&nbsp;&nbsp;quickLearner:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span></div>
              <div className="whitespace-pre"><span className="text-white">&nbsp;&nbsp;problemSolver:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span></div>
              <div className="whitespace-pre"><span className="text-green-400">&nbsp;&nbsp;hireable:</span> <span className="text-orange-400">function</span> <span className="text-gray-400">() {'{'}</span></div>
              <div className="whitespace-pre"><span className="text-orange-400">&nbsp;&nbsp;&nbsp;&nbsp;return</span> <span className="text-gray-400">(</span></div>
              <div className="whitespace-pre"><span className="text-cyan-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.</span><span className="text-white">hardWorker</span> <span className="text-amber-300">&amp;&amp;</span></div>
              <div className="whitespace-pre"><span className="text-cyan-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.</span><span className="text-white">problemSolver</span> <span className="text-amber-300">&amp;&amp;</span></div>
              <div className="whitespace-pre"><span className="text-cyan-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.</span><span className="text-white">skills.length</span> <span className="text-amber-300">&gt;=</span> <span className="text-orange-400">5</span></div>
              <div className="whitespace-pre text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;);</div>
              <div className="whitespace-pre text-gray-400">
                <span>{'}'}</span>;
              </div>
              <div className="whitespace-pre text-gray-400">
                <span>{'}'}</span>;
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;