import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  const urlEmail = "";
  return (
    <section id="contact" className="container h-full">
      <article className="max-sm:hidden flex-1 flex flex-col justify-between items-start h-[392px]">
        <div className="max-w-[85%]">
          <h2 className="capitalize mb-4 mt-14">contact me</h2>
          <p className=" leading-6 tracking-wide ">anda bisa menghubungi saya, dengan cara kirim pesan lewat form disamping, atau dengan klik sosial media button di bawah ini.</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <a href="">
          <AiOutlineGithub size={"2rem"} className=" text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white" />
          </a>
          <a>
          <AiOutlineLinkedin size={"2rem"} className="text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white" />
          </a>
          <a>
          <AiOutlineWhatsApp size={"2rem"} className=" text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white" />
          </a>
        </div>
      </article>
      <div className="flex flex-col flex-1">
        <h2 className="capitalize flex-1 text-center mb-5 mt-24">contact me</h2>
        <form className="flex flex-col gap-4" autoComplete="on">
          <input type="text" name="name" placeholder="name" required className="flex-1 px-4 py-2 focus:outline-2 focus:outline-sky-700 placeholder:capitalize text-black text-lg" minLength="2" />
          <input type="email" name="email" placeholder="email" required className="flex-1 px-4 py-2 focus:outline-2 focus:outline-sky-700 placeholder:capitalize text-black text-lg" />
          <textarea type="text" placeholder="masukan isi pesan anda" required rows="5" className="flex-1 px-4 py-2 focus:outline-2 focus:outline-sky-700 placeholder:capitalize text-black text-lg"></textarea>
          <div className="flex gap-4">
            <input type="submit" className=" bg-sky-400 px-4 py-2 hover:opacity-75" />
            <a href="#home" className="sm:hidden bg-sky-300 bg-opacity-20 border-4 border-sky-500 px-4 py-2 capitalize hover:opacity-75 ">
              sosial media
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
