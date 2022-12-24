import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className=" bg-mybluelight fixed top-0 right-0 w-full shadow-sm shadow-mybluedark z-[99999]">
        <div className="text-mywhite flex justify-between items-center px-8 py-4 flex-wrap">
          <div className=" font-bold uppercase text-4xl max-sm:text-3xl">
            <a href={"/"}>
              my <span className=" text-indigo-500">web</span>
            </a>
          </div>
          <GiHamburgerMenu size={"1.875rem"} onClick={handleToggle} className=" sm:hidden" />

          <div className={"max-sm:hidden flex capitalize text-lg relative"}>
            <a className={"navLink"} href="#">
              home
            </a>
            <a className={"navLink"} href="#skills">
              skills
            </a>
            <a className={"navLink"} href="#projects">
              projects
            </a>
            <a className={"navLink"} href="#contact">
              contact
            </a>
          </div>

          <div
            className={
              toggle
                ? "animetenav bg-mybluelight sm:hidden fixed top-0 right-0 bottom-0 z-[-1000] w-[40%] capitalize text-center mt-[68px] text-xl shadow-inner shadow-3xl flex justify-between items-center flex-col shadow-mybluedark"
                : "hidden"
            }
            onClick={handleToggle}
          >
            <div>
              <a className="m-auto block w-full py-5 hover:bg-mygrey " href="#">
                home
              </a>
              <a className="m-auto block w-full py-5 hover:bg-mygrey " href="#skills">
                skills
              </a>
              <a className="m-auto block w-full py-5 hover:bg-mygrey " href="#projects">
                projects
              </a>
              <a className="m-auto block w-full py-5 hover:bg-mygrey " href="#contact">
                contact
              </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 pb-10">
              <h4 className="text-lg flex-grow">contact me</h4>
              <div className="flex gap-4">
                <a className=" hover:scale-110 transition-all duration-200" href="https://www.linkedin.com/in/jun-choi-46047123b/" target="_blank" rel={"noreferrer"}>
                  <AiOutlineLinkedin size={"1.75rem"} />
                </a>
                <a className=" hover:scale-110 transition-all duration-200" href="https://wa.me/089602391929" target={"_blank"} rel={"noreferrer"}>
                  <AiOutlineWhatsApp size={"1.75rem"} />
                </a>
                <a className=" hover:scale-110 transition-all duration-200" href="https://github.com/Excell-09" target={"_blank"} rel={"noreferrer"}>
                  <AiOutlineGithub size={"1.75rem"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
