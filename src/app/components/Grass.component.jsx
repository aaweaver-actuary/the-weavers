import Image from 'next/image';

const Grass = () => {
  return (
    <div className="flex flex-row w-[101vw] h-[20vh] absolute bottom-[-10px]">
      <Image
        src="../../../assets/shower-grass.svg"
        alt="Grass"
        className="w-[100%] h-[100%]"
        fill={true}
      />
    </div>
  );
};

export default Grass;
