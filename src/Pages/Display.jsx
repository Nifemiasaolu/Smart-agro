import { FaPlay } from "react-icons/fa";

function Display() {
  return (
    <div className="app-bg2 section-padding flex h-[15rem] items-center justify-around">
      <div>
        <h1
          className="p-livvic text-lg font-bold"
        >
          Agriculture Matters to <br /> the Future of Bangladesh
        </h1>
      </div>
      <div className="border p-2 bg-white rounded-[50%] outline
       outline-offset-[10px] outline-[0.5px] outline-lightBack">
        <FaPlay className="text-[10px] text-black"/>
      </div>
    </div>
  );
}

export default Display;
////
