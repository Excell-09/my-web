import ImageComponent from '../ImageProjectComponent/Image.Component';
import { amazon, jobfind, shopping, twitter } from '../../assests';

const ProjectImage = [
  {
    banner: amazon,
    title: 'amazon clone',
    url: 'http://amazon-clone-excell-09.vercel.app',
    danger: true,
  },
  {
    banner: jobfind,
    title: 'Job Finder',
    url: 'https://smiling-gabardine-foal.cyclic.app',
    danger: false,
  },
  {
    banner: shopping,
    title: 'shopping',
    url: 'https://shopping-three-xi.vercel.app',
    danger: false,
  },
  {
    banner: twitter,
    title: 'twitter',
    url: 'https://twitter-clone-pink-ten.vercel.app',
    danger: false,
  },
];

const ProjectSection = () => {
  return (
    <>
      <section className='container flex-col' id='projects'>
        <h2 className="relative after:content[''] after:absolute after:h-[8px] after:w-[180px] after:bg-mygrey mb-14 after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:rounded after:px-8 capitalize mt-24 ">
          Projects/portofolio
        </h2>
        <div className='grid sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 '>
          {ProjectImage.map((item, i) => (
            <ImageComponent key={i} danger={item.danger} directUrl={item.url} image={item.banner} alt={item.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
