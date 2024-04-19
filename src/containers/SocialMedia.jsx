import { SocialMediaIcon } from "../components";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.svg";
import github from "../assets/github_logo.png"
import linkedIn from "../assets/linkedIn_logo.png";
const SocialMedia = () => {
  return (
    <section className="fixed bottom-4 left-5 gap-5 z-50">
   
      <SocialMediaIcon
        link="https://ke.linkedin.com/in/clarencegatamachege"
        icon={linkedIn}
      />
        <SocialMediaIcon
        link="https://github.com/ClarenceG01"
        icon={github}
      />
    </section>
  );
};

export default SocialMedia;
