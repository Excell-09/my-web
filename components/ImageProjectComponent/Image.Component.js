import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({ image, alt, directUrl }) => {
  return (
    <>
      <article className="project">
        <div className="project-group">
          <Image src={image} alt={alt} />
          <div className="project-detail">
            <Link href={directUrl} className="capitalize border-4 border-sky-500 bg-sky-500 px-2 py-1 active:opacity-80 mb-1 block font-bold tracking-widest text-lg">
              lainnya
            </Link>
            <p>klik untuk melihat info lainnya</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ImageComponent;
