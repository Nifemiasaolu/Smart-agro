import { images, data } from "../Constants";
import OrganicItem from "../Features/OrganicItem";

function AboutUs() {
  const text = `We're Leader in Agriculture Market`;

  return (
    <div id="about" className="relative h-screen md:">
      <div className=" h-[10rem] w-[12rem] rounded-e bg-darkGreen" />

      <div
        className=" flex-center section-padding absolute left-10
        top-[0] z-10 flex-col gap-[4rem]  py-[3rem] md:flex-row"
      >

        <div className="relative ">

        <div className="bg-golden absolute bottom-2 left-[-7px] h-[6rem] w-[0.3rem]"/>
        
          <div className="w-full">
            <img
              src={images.organicFarm}
              alt="organicFarm"
              className="aspect-square w-[15rem] md:w-full"
            />
          </div>

          <div
            className="flex-center absolute bottom-[-1.5rem] 
            left-[1.5rem] w-[12rem] gap-6 rounded bg-lightGreen px-[3px]
            py-[6px] sm:left-[15%] sm:w-[11rem] lg:left-[25%]  "
          >
            <div className="flex-center relative">
              <img
                src={images.investment}
                alt="investment"
                className="aspect-square w-[20px]"
              />
              <img
                src={images.botanic}
                alt="botanic"
                className="absolute left-2 top-[-9px] aspect-square w-[20px]"
              />
            </div>

            <div className="bg-gray-400 h-[2rem] border" />

            <div className="flex flex-col items-start justify-center">
              <p>86,700</p>
              <p className="text-[7px]">Successfully Project Completed</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start md:items-start">
          <p className="p-gothic mb-[1rem] text-xs md:mb-[1.5rem]">
            OUR INTRODUCTION
          </p>

          <h1 className="p-livvic mb-[1rem] text-center text-lg font-bold md:mb-[1.5rem] md:text-start md:text-[20px]">
            Pure Agriculture and <br /> Organic Form
          </h1>

          <p className="mb-4 text-golden">{text}</p>

          <p className="mb-6 text-center text-xs md:text-start">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humou or
            randomised words even slightly believable.
          </p>

          <ul className="flex flex-col gap-2">
            {data.organic.map((organ) => (
              <OrganicItem key={organ.id} organ={organ} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
/////
