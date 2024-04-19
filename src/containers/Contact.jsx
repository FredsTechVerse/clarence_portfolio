import { SectionHeading } from "../components";
import PhotographEssay from "../assets/PhotoEssay.pdf";
import CVAllLanguages from "../assets/MultiLanguage_CV.pdf";

const Contact = () => {
  return (
    <article id="contact" className="w-full bg-slate-100 rounded-t-lg">
       <section className="section_hidden w-full px-10 py-16">
        <SectionHeading subTitle="Know more" title="Resources" />
         {/* <iframe className="aspect-video w-full " src="https://www.youtube.com/embed/k5rMfDL1Mcs?si=rkywoKHDsFP8Uzns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
         <section className="grid grid-cols-2 place-items-center my-10">
           <a
            href={CVAllLanguages}
            download="CVAllLanguages"
            className="bg-primary hover:bg-red-500 h-12 rounded-full px-4  text-white w-[80%] tablet:w-56 flex flex-row items-center justify-center mx-auto laptop:mx-0"
          >
            Multi language CV
          </a>
           <a
            href={PhotographEssay}
            download="PhotographEssay"
            className="bg-primary hover:bg-red-500 h-12 rounded-full px-4  text-white w-[80%] tablet:w-56 flex flex-row items-center justify-center mx-auto laptop:mx-0"
          >
            Photograph Essay
          </a>
         </section>
      </section>
      <section className="section_hidden w-full py-16">
        <SectionHeading subTitle="Have a gig?" title="Reach out" />
        <section className="section_hidden flex flex-col  gap-8 w-full items-center justify-center">
          <form className="w-full text-slate-800 text-sm flex flex-col items-center justify-start gap-2 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-72 tablet:w-[550px] px-2 appearance-none h-12 border-2 text-gray-700 leading-tight focus:outline-none  focus:border-purple-400 placeholder:text-sm bg-slate-200 border-none rounded-lg text-start  "
            />
            <textarea
              placeholder="Your message"
              className="w-72 tablet:w-[550px] px-2 appearance-none h-36 py-2 border-2 text-gray-700 leading-tight focus:outline-none  focus:border-purple-400 placeholder:text-sm bg-slate-200 border-none rounded-lg text-start "
            ></textarea>
          </form>
          <button className="bg-primary hover:bg-red-700 h-12 w-48 rounded-lg text-slate-100">
            Submit
          </button>
        </section>
      </section>
    </article>
  );
};

export default Contact;
