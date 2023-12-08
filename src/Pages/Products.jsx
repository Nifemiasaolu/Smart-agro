import { data } from "../Constants";
import VegetableItem from "../Features/VegetableItem";

function Products() {
  return (
    <div
      id="product"
      className="section-padding flex-center  flex-col mt-[2rem]"
    >
      <div>
        <p className="text-xs uppercase p-gothic mb-[1rem]">Popular foods and vegetables</p>
        <h1 className="capitalize font-bold  p-livvic mb-[1rem] text-center text-lg  ">Quality fruits & vegetables</h1>
      </div>

      <ul className="flex-center  flex-wrap gap-8 ">
        {data.vegetables.map((veg) => (
          <VegetableItem veg={veg} key={veg.id} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
//
