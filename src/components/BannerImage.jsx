import banner from "../assets/banner_1.png";
import blob from "../assets/blob.svg";
const BannerImage = () => {
  return (
    <figure className=" h-[400px] tablet:min-h-[600px] tablet:h-max  laptop:h-full w-full laptop:w-[50%] relative  flex flex-row items-end justify-center ">
      <img
        className="absolute phone:bottom-0  laptop:left-12 aspect-square w-full tablet:w-[70%] laptop:w-[78%]"
        src={banner}
        alt="Banner Image "
      />
      <img
        className="absolute phone:bottom-0 h-[95%] tablet:h-[80%] laptop:h-[88%] bottom-0 w-full z-[-2] blob"
        src={blob}
        alt="Blob Image "
      />
    </figure>
  );
};

export default BannerImage;
