import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  const urlEmail = "https://formsubmit.co/excell.agcb12@gmail.com";
  return (
    <section className="container grid grid-cols-2 mt-20" id="contact">
      <article className="flex flex-col justify-between capitalize h-[404px] max-sm:hidden">
        <div className="max-w-[80%]">
          <h2 className=" max-lg:text-2xl ">contact me by email</h2>
          <p>anda bisa mengirimkan pesan melalui form, atau click hubungi sosial media di bawah ini!</p>
        </div>
        <div className="flex gap-8 ">
          <AiOutlineGithub size={"2rem"} className=" text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white" />
          <AiOutlineLinkedin size={"2rem"} className=" text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white" />
          <AiOutlineWhatsApp size={"2rem"} className=" text-mybluedark shadow-xl shadow-mygrey p-1 hover:scale-110 hover:shadow-lg hover:shadow-mybluelight transition-all duration-300 border-4 w-14 h-auto rounded-full bg-white" />
        </div>
      </article>
      <div>
        <h2 className=" capitalize text text-center mb-5">contact me</h2>
        <form className="flex flex-col gap-4 max-w-sm:max-w-sm" action={urlEmail} method="POST">
          <input type="text" className=" px-4 py-2 placeholder:text-slate-400 placeholder:capitalize" required placeholder="name" />
          <input type="email" className=" px-4 py-2 placeholder:text-slate-400 placeholder:capitalize" required placeholder="email" />
          <textarea className=" px-4 py-2 placeholder:text-slate-400 placeholder:capitalize" name="message" rows="4" cols="50" placeholder="masukan pesan anda"></textarea>
          <input className=" inline bg-sky-600 px-4 py-2 cursor-pointer hover:opacity-70 " type={"submit"} />
          <a href="#home" className=" max-sm:hidden inline text-center border-4 bg-slate-600 border-sky-600 px-4 py-2 cursor-pointer hover:opacity-70 ">
            sosial media
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
