import { useState } from "react";
import { images, data } from "../../Constants";
import NavbarItem from "./NavbarItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((prev) => !prev);
  }

  function closeModal() {
    setToggle(false);
  }

  return (
    <div className="flex items-center justify-between section-padding md:gap-[8rem]">
      <div className="w-full">
        <img src={images.logo} alt="logo" className=" " />
      </div>

      <div className=" w-full">
        <ul className=" items-center hidden justify-between gap-4 md:flex ">
          {data.menus.map((menu) => (
            <NavbarItem key={menu.id} menu={menu} />
          ))}
        </ul>
      </div>

      {/* Mobile toggle */}
      <div className="flex md:hidden">
        <GiHamburgerMenu className="cursor-pointer" onClick={handleClick} />

        {toggle && (
          <div
            className="flex-center slide-bottom fixed left-0 top-0
            z-[5] h-screen w-full flex-col bg-black
            transition duration-300 ease-in-out"
          >
            <IoClose
              className="absolute right-10 top-5 cursor-pointer text-[1.5rem] 
              font-bold"
              onClick={handleClick}
            />
            <ul className=" ">
              {data.menus.map((menu) => (
                <NavbarItem key={menu.id} menu={menu} onClick={closeModal}/>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
///