import ImageComponent from '../ImageProjectComponent/Image.Component';
import { amazon, netflix, shopping } from '../../assests';

const ProjectImage = [
  {
    banner: amazon,
    title: 'amazon clone',
    url: 'amazon-clone-excell-09.vercel.app',
  },
  {
    banner: netflix,
    title: 'netflix clone',
    url: 'https://neflix-simply-clone.vercel.app',
  },
  {
    banner: shopping,
    title: 'shopping',
    url: 'shopping-three-xi.vercel.app',
  },
];

const ProjectSection = () => {
  return (
    <>
      <section
        className='container flex-col'
        id='projects'>
        <h2 className="relative after:content[''] after:absolute after:h-[8px] after:w-[180px] after:bg-mygrey mb-14 after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:rounded after:px-8 capitalize mt-24 ">
          Projects/portofolio
        </h2>
        <div className='grid sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 '>
          {ProjectImage.map((item, i) => (
            <ImageComponent
              key={i}
              directUrl={item.url}
              image={item.banner}
              alt={item.}
            />
          ))}
          <ImageComponent
            directUrl='/crypto'
            image={cryptoImg}
            alt='crypto'
          />
          <ImageComponent
            directUrl='/netflix'
            image={netflixImg}
            alt='netflix'
          />
          <ImageComponent
            directUrl='/twitch'
            image={twitchImg}
            alt='twitch'
          />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
