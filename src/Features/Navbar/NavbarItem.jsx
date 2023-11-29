function NavbarItem({ menu, onClick }) {
  return (
    <li
      className="mb-4 font-['Nanum_Gothic'] text-xs
     text-lightGrey transition duration-300 ease-linear
      hover:text-white md:mb-0 "
    >
      <a href={menu.id} onClick={onClick}>
        {menu.title}
      </a>
      <div />
    </li>
  );
}

export default NavbarItem;
