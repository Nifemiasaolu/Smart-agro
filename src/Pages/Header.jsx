import Button from "../UI/Button";
import { images } from "../Constants";

function Header() {
  return (
    <div className="app-bg section-padding h-screen flex items-center justify-start">
      <div>
        <div className="flex flex-col items-start">
        <p className="p-gothic text-sm font-bold ">Original & Natural</p>
        <img src={images.underline} alt="underline" className="w-[20%]"/>
        </div>

        <div className="relative">
          <img src={images.leaf} alt="leaf" className="leaf-img absolute 
            left-[15rem] top-[-1rem] "/>
          <h1 className="p-livvic font-bold text-[30px] text-golden">Agriculture Matter</h1> <br />
        </div>
        
        <h1>
          <span>Good Production</span>
        </h1>
        <p>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he speedily.
        </p>

        <Button>Discover More</Button>
      </div>
    </div>
  );
}

export default Header;
