import Button from "../UI/Button";
import { images } from "../Constants";

function Header() {
  return (
    <div className="app-bg section-padding flex h-screen items-center justify-start">
      <div>
        <div className="flex flex-col items-start">
          <p className="p-gothic text-sm font-bold ">Original & Natural</p>
          <img src={images.underline} alt="underline" className="w-[20%]" />
        </div>

        <div className="relative">
          <img
            src={images.leaf}
            alt="leaf"
            className="leaf-img absolute 
            left-[15rem] top-[-1rem] "
          />
          <h1 className="p-livvic text-[30px] font-bold text-golden">
            Agriculture Matter
          </h1>
          <h1 className="p-livvic text-[30px] font-bold">Good Production</h1>
        </div>
        <p className="p-gothic text-xs  ">
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In <br /> on my jointure horrible margaret suitable he speedily.
        </p>

        <Button>Discover More</Button>
      </div>
    </div>
  );
}

export default Header;
////