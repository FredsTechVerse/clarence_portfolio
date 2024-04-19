const Link = ({ link, title, onClick }) => {
  return (
    <div className="w-full h-12 " onClick={onClick}>
      <a
        href={link}
        className="flex flex-row justify-center items-center h-full w-full hover:bg-orange-700 text-white flex-row-centered  laptop:px-4 "
      >
        {title}
      </a>
    </div>
  );
};

export default Link;
