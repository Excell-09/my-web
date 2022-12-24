import ImageComponent from "../ImageProjectComponent/Image.Component";
import propertyImg from "./../../public/projects/property.jpg";
import cryptoImg from "./../../public/projects/crypto.jpg";
import netflixImg from "./../../public/projects/netflix.jpg";
import twitchImg from "./../../public/projects/twitch.jpg";

const ProjectSection = () => {
  return (
    <>
      <section className="container flex-col" id="projects">
        <h2 className="relative after:content[''] after:absolute after:h-[8px] after:w-full after:bg-mygrey mb-10 after:bottom-[-15px] after:left-0 after:rounded after:px-8 capitalize mt-24 ">Projects/portofolio</h2>
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
