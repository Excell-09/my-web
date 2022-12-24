
const Skillbar = ({ titleSkill, persen, text, animasi }) => {
  const SKILLS_BG = {
    html: "html",
    css: "css",
    javascript: "javascript",
    tailwind: "tailwind",
    reactjs: "reactjs",
    github:"github",
  };



  return (
    <>
      <div className={`${SKILLS_BG[titleSkill]} flex border-4 border-mybluelight mb-3 justify-between items-center relative`}>
        <div className={`h-full absolute`} />
        <div>
          <div className={`title-${titleSkill} py-2 px-4 relative text-lg sm:text-xl`}>{text}</div>
        </div>
        <div className={`persen-${titleSkill} mr-2 text-lg sm:text-xl`}>{persen}</div>
      </div>
    </>
  );
};

export default Skillbar;
