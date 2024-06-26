import { TechTag } from "../components";

const WorkCard = ({ image, name, description, link, status }) => {
  return (
    <section className="work section_hidden  rounded-lg  aspect-square w-full flex flex-col items-center justify-start h-full shadow-xl bg-transparent shadow-slate-500/40 cursor-pointer pb-1  ">
      <figure className="rounded-l w-full h-[60%] relative group ">
        <a href={link}>
          <img
            src={image}
            alt="Alternative image"
            className="rounded-t-lg h-full aspect-video"
          />
        </a>
      </figure>
      <figcaption className="relative flex flex-col justify-between items-center px-2  pt-1 text-center h-[40%] w-full  bg-transparent ">
        <h1 className="absolute mt-[-16px] bg-primary text-slate-50 px-4 py-0.5 rounded-full  font-extrabold capitalize  text-[14px]">
          {name}
        </h1>
        <p className=" text-[15px] font-thin mt-5 text-center w-full">
          {description}
        </p>
        <section className=" flex items-center justify-center gap-1 ">
          <TechTag text="react" />
          <TechTag text="tailwindcss" />
        </section>
      </figcaption>
    </section>
  );
};

export default WorkCard;
