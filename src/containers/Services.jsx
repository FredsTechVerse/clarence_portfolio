// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import web_development from "../assets/web_development.webp";
import software_development from "../assets/software_development.jpg"
import mobile_app from "../assets/mobile_app.jpg"
import cloud_computing from "../assets/cloud_computing.jpeg"

const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-black/30  backdrop-blur-lg py-16 service"
    >
      <SectionHeading subTitle="Services" title="What we offer" />
      
<section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 place-items-center px-5 tablet:px-10 laptop:px-15">
        <ServiceCard
          image={software_development}
          heading="Custom Software Development"
          body="Tailor-made software solutions to address specific business requirements or user needs."
        />

        <ServiceCard
          image={web_development}
          heading="Web Development"
          body="Creating responsive and dynamic websites or web applications using modern technologies and frameworks."
        />

        <ServiceCard
          image={mobile_app}
          heading="Mobile App Development"
          body="Designing and building native or cross-platform mobile applications for iOS and Android platforms."
        />

        <ServiceCard
          image={cloud_computing}
          heading="Cloud Computing Solutions"
          body="Designing, deploying, and maintaining scalable and secure cloud-based solutions using leading cloud platforms."
        />
</section>
    </article>
  );
};

export default Services;
