import resume from "../assets/mainCV.pdf";
import banner from "../assets/clarence_dp.jpeg";
import { SectionHeading } from "../components";

const About = () => {
  return (
    <article
      id="about"
      className="w-full py-12 laptop:py-16 px-5 bg-slate-100  rounded-lg"
    >
      <SectionHeading subTitle="About" title="Who am I" />
      <section className="flex flex-col laptop:flex-row items-center gap-12">
        <figcaption className=" order-1 laptop:order-2 relative w-full laptop:w-[50%] flex flex-col items-center laptop:items-start justify-center py-12 pl-5 text-center ">
          <p className="text-md tablet:text-lg text-center laptop:text-start pt-3 pb-10 ">
            I am a skilled software developer with a fervent enthusiasm for crafting elegant solutions through code. With a keen eye for detail and a deep understanding of programming languages and frameworks, I thrive on creating efficient, scalable, and user-centric software applications. Committed to staying abreast of emerging technologies and industry trends, I relish the opportunity to tackle complex challenges and deliver innovative solutions that empower businesses and enhance user experiences. Passionate about continuous learning and collaboration, I am dedicated to pushing the boundaries of what's possible in the digital realm and contributing to the advancement of technology-driven initiatives.
          </p>

          <a
            href={resume}
            download="Clarence Gatama"
            className="bg-primary hover:bg-red-500 h-12 rounded-full px-4  text-white w-[80%] tablet:w-56 flex flex-row items-center justify-center mx-auto laptop:mx-0"
          >
            View Resume
          </a>
        </figcaption>
        <img
          className="order-2 laptop:order-1 w-full tablet:w-[70%] laptop:w-[40%] aspect-square h-full rounded-lg shadow-lg shadow-slate-400"
          src={banner}
          alt="Banner Image "
        />
      </section>
    </article>
  );
};

export default About;
