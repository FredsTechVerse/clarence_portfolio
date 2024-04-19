import { SectionHeading, WorkCard } from "../components";
import EduTrack from "../assets/eduTrack.jpeg"
import SocialVerse from "../assets/socialVerse.jpeg"

const Work = () => {
  return (
    <article
      id="projects"
      className="relative bg-slate-100 py-16 rounded-lg laptop:rounded-lg "
    >
      <SectionHeading subTitle="projects" title="featured work" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 p-4 place-items-center px-5 tablet:px-10 laptop:px-15 rounded-2xl">
        <WorkCard
          link="https://github.com/ClarenceG01/EduTrack"
          image={EduTrack}
          name="Edu Track"
          description="A tracking system"
        />
        <WorkCard
          link="https://github.com/ClarenceG01/SocialVerse"
          image={SocialVerse}
          name="Social Verse"
          description="A social media platform"
        />
        
      </section>
    </article>
  );
};

export default Work;
