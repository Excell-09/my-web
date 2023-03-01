import Skillbar from "../skillbarComponent/SkillbarComponen";
import { useRef, useEffect } from "react";

const Skills = () => {
  const element = useRef(null);

  useEffect(() => {
    const element1 = element.current.children[0].children[0];
    const element2 = element.current.children[1].children[0];
    const element3 = element.current.children[2].children[0];
    const element4 = element.current.children[3].children[0];
    const element5 = element.current.children[4].children[0];
    const element6 = element.current.children[5].children[0];
    
    const animateF = (entries, typeAnimation) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(typeAnimation, entry.isIntersecting);
        });
      });

      observer.observe(entries);
    };

    animateF(element1, "htmlProgressBar");
    animateF(element2, "cssProgressBar");
    animateF(element3, "javascriptProgressBar");
    animateF(element4, "tailwindProgressBar");
    animateF(element5, "reactjsProgressBar");
    animateF(element6, "typescriptProgressBar");
  }, []);

  return (
    <section id="skills" className="container flex-col">
      <article className="text-center capitalize">
        <h2 className="mb-3 mt-24">skills</h2>
        <p className=" mb-6">ini adalah beberapa skills yang saya pelajari</p>
      </article>
      <div ref={element} className="w-full text-mywhite capitalize">
        <Skillbar titleSkill="html" persen="70%" text="html" />
        <Skillbar titleSkill="css" persen="65%" text="css" />
        <Skillbar titleSkill="javascript" persen="60%" text="javascript" />
        <Skillbar titleSkill="typescript" persen="60%" text="typescript" />
        <Skillbar titleSkill="tailwind" persen="65%" text="tailwind" />
        <Skillbar titleSkill="reactjs" persen="55%" text="react js" />
      </div>
    </section>
  );
};

export default Skills;
