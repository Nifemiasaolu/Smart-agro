import { data, images } from "../Constants";
import ServicesItem from "../Features/ServicesItem";

function Services() {
  return (
    <div id="services" className="relative flex flex-col bg-lightGreen tablet:flex-row">
      <div className="aspect-auto w-[fit] tablet:w-[30rem]">
        <img src={images.productImg} alt="productImg" className=" " />
      </div>


      <div className="relative">
        <div>
          <img
            src={images.productIcon}
            alt="Product Icon"
            className="absolute left-[50%] -top-5 tablet:block tablet:top-4 tablet:-left-6 w-[3rem]"
          />

          <img
            src={images.productStyle}
            alt="Product style"
            className="absolute right-0 top-0 w-[6rem]"
          />
          <img
            src={images.productFaintStyle}
            alt="Product style"
            className="absolute bottom-0 right-0 w-[20rem]"
          />
        </div>

        <div className="section-padding flex-center my-[3rem] flex-col tablet:my-0 tablet:items-start">
          <div>
            <p
              className="p-gothic mb-[10px] text-center text-[10px]
            uppercase tablet:text-start"
            >
              Modern Agriculture
            </p>

            <h1
              className="p-livvic mb-[1rem] text-center text-lg
            font-bold capitalize  "
            >
              Providing High Quality Products
            </h1>
          </div>

          <ul className="flex flex-col items-start gap-12">
            {data.services.map((service) => (
              <ServicesItem service={service} key={service.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
