const Button = ({ text, link, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="mx-0 my-[5px] p-[10px] rounded-[10px] border-[rgb(74, 181, 99)] border-[1px] duration-200 ease-in-out hover:bg-[rgb(74, 181, 99)] hover:text-white hover:border-white hover:scale-105 active:scale-[1.2]"
    >
      {link && <a href={link}>{text}</a>}
      {!link && <span>{text}</span>}
    </button>
  );
};

export default Button;
