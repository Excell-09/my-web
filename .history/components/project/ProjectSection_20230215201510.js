import ImageComponent from "../ImageProjectComponent/Image.Component";
import { amazon } from "../../assests";
import { amazon } from "../../assests";

const ProjectImage = {
  banner:
}


const ProjectSection = () => {
  return (
    <>
      <section className="container flex-col" id="projects">
        <h2 className="relative after:content[''] after:absolute after:h-[8px] after:w-[180px] after:bg-mygrey mb-14 after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:rounded after:px-8 capitalize mt-24 ">Projects/portofolio</h2>
        <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 ">
          <ImageComponent directUrl="/property" image={propertyImg} alt="property" />
          <ImageComponent directUrl="/crypto" image={cryptoImg} alt="crypto" />
          <ImageComponent directUrl="/netflix" image={netflixImg} alt="netflix" />
          <ImageComponent directUrl="/twitch" image={twitchImg} alt="twitch" />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
