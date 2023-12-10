import { data } from "../Constants";
import VegetableItem from "../Features/VegetableItem";

function Products() {
  return (
    <div
      id="product"
      className="section-padding flex-center my-[2rem] flex-col"
    >
      <div>
        <p className="p-gothic mb-[10px] text-center text-[10px] uppercase">
          Popular foods and vegetables
        </p>
        <h1 className="p-livvic mb-[1rem]  text-center text-lg font-bold capitalize  ">
          Quality fruits & vegetables
        </h1>
      </div>

      <ul className="flex-center flex-wrap gap-8 ">
        {data.vegetables.map((veg) => (
          <VegetableItem veg={veg} key={veg.id} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
////
