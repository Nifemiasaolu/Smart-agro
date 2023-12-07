function VegetableItem({ veg }) {
  return (
    <li
      className="flex-center bg-lightGreen flex-1 flex-col 
      cursor-pointer transition rounded-[15px] p-4 duration-300
       hover:bg-golden hover:text-black"
    >
      <div className="pb-4">
        <img
          src={veg.imageUrl}
          alt="veg"
          className="aspect-square w-[1.5rem] "
        />
      </div>
      <div className="text-xs  text-white">{veg.name}</div>
    </li>
  );
}

export default VegetableItem;
// ////