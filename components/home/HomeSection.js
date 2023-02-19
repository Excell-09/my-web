import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai';

const HomeSection = () => {
  return (
    <section id='home' className='container h-[95vh]'>
      <article className=' text-center '>
        <h2 className=' capitalize font-medium mb-1'>hai, nama saya</h2>
        <h1 className=' uppercase tracking-wider font-black bg-gradient-to-r from-indigo-500 via-purple-700 to-sky-500 bg-clip-text text-transparent text-[100px] mb-4 max-sm:text-6xl animate-title'>
          jun choi
        </h1>
        <p className=' text-lg tracking-[.2rem] mb-4'>front end web developer</p>
        <div className='flex justify-center items-center gap-5'>
          <a href='https://github.com/Excell-09' target={'_blank'} rel='noreferrer'>
            <AiOutlineGithub
              size={'2rem'}
              className=' text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white'
            />
          </a>
          <a href='https://www.linkedin.com/in/jun-choi-46047123b/' target={'_blank'} rel='noreferrer'>
            <AiOutlineLinkedin
              size={'2rem'}
              className='text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white'
            />
          </a>
          <a href='https://api.whatsapp.com/send?phone=6289602391929' target={'_blank'} rel='noreferrer'>
            <AiOutlineWhatsApp
              size={'2rem'}
              className=' text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white'
            />
          </a>
        </div>
      </article>
    </section>
  );
};

export default HomeSection;
