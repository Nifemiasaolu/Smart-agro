function ServicesItem({ service }) {
  return (
    <li className="flex items-center gap-4 ">
      <div className="rounded-[50%] bg-darkGreen p-3 ">
        <img src={service.imgUrl} alt="service" className="w-[2rem] aspect-square" />
      </div>

      <div>
        <h2 className="font-bold ">{service.title}</h2>
        <p className="text-xs ">{service.text}</p>
      </div>
    </li>
  );
}

export default ServicesItem;
