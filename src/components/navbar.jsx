// @flow strict
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-transparent py-0 z-10">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between py-0">
          <div className="flex flex-shrink-0 items-center">
            <Link
              to="/"
              className=" text-[#3F926B] text-3xl font-bold">
              
            </Link>
          </div>

          <ul className="flex flex-row items-center space-x-4 text-sm" id="navbar-default">
            <li>
              <a href="#about" className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-[#FC1500] transition-colors duration-300 hover:text-green-600 font-bold">
                <img src="/svg/about.svg" alt="ME" className="w-4 h-4 block md:hidden" />
                <span className="hidden md:block">ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="block px-4 py-2 no-underline outline-none hover:no-underline font-bold text-sm text-[#FC1500] transition-colors duration-300 hover:text-green-600">
                <img src="/svg/experience.svg" alt="XP" className="w-4 h-4 block md:hidden" />
                <span className="hidden md:block">EXPERIENCE</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="block px-4 py-2 no-underline outline-none hover:no-underline font-bold text-sm text-[#FC1500] transition-colors duration-300 hover:text-green-600">
                <img src="/svg/skills.png" alt="SKL" className="w-4 h-4 block md:hidden" />
                <span className="hidden md:block">SKILLS</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-4 py-2 no-underline outline-none hover:no-underline font-bold text-sm text-[#FC1500] transition-colors duration-300 hover:text-green-600">
                <img src="/svg/projects.svg" alt="PRJ" className="w-4 h-4 block md:hidden" />
                <span className="hidden md:block">PROJECTS</span>
              </a>
            </li>
            <li>
              <a href="#education" className="block px-4 py-2 no-underline outline-none hover:no-underline font-bold text-sm text-[#FC1500] transition-colors duration-300 hover:text-green-600">
                <img src="/svg/education.svg" alt="ED" className="w-4 h-4 block md:hidden" />
                <span className="hidden md:block">EDUCATION</span>
              </a>
            </li>
            <li>
              {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#testimonials">
              <div className=" font-bold text-sm text-[#FC1500] transition-colors duration-300 hover:text-green-600">TESTIMONIALS</div></Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;