import { images } from "../Constants";

function Testimonial() {
  const text = `“Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus
  leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique
  venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit
  malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi
  commodo volutpat quis neque. Scelerisque at in in id donec ornare velit.
  Posuere amet lobortis volutpat purus mauris. Tortor magna non turpis
  ultricies iaculis rhoncus. Volutpat lectus proin pellentesque platea.”`;


  return (
    <div className="section-padding my-[4rem] flex-center flex flex-col">
      <div>
        <p className="p-gothic mb-[10px] text-center text-[10px] uppercase">
          Popular foods and vegetables
        </p>
        <h1 className="p-livvic mb-[1rem]  text-center text-lg font-bold capitalize  ">
          Quality fruits & vegetables
        </h1>
      </div>

      <div className="flex-center flex-col gap-4 tablet:flex-row">
        <div className="flex-center relative w-[70%] tablet:w-[199%]">
          <img src={images.testimonial} alt="Testimonial" />
          <img
            src={images.quote}
            alt="qoute"
            className="absolute right-10 top-0 w-[2rem] sm:right-[9rem]
             tablet:right-[3rem] md:right-[5rem] lg:right-[11rem]"
          />
        </div>

        <div>
          <p className="text-xs ">{text}</p>
          <div className="mt-8">
            <h1 className="p-livvic font-bold">Tryrese Gibson</h1>
            <p className="text-xs ">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
