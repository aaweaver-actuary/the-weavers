const CrosswordBox = ({ box, index, handleBoxClick, toggleBoxDirection }) => {
  return (
    <div className="border-[1px] border-black rounded-md w-[30px] h-[30px] m-0 p-0">
      <input
        className="rounded-md w-[30px] h-[30px]"
        type="text"
        value={box.value}
        onClick={(e) => handleBoxClick(e, index)}
        onDoubleClick={(e) => toggleBoxDirection(e)}
      />
    </div>
  );
};

export default CrosswordBox;
