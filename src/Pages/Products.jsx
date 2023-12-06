import { data } from "../Constants"
import VegetableItem from "../Features/VegetableItem"

function Products() {
  return (
    <div id="product" className="section-padding h-screen flex-center flex-col ">
      <div>
        <p>Popular foods and vegetables</p>
        <h1>Quality fruits & vegetables</h1>
      </div>
        
      <ul className="flex-center  flex-wrap gap-8 ">
        {data.vegetables.map(veg => <VegetableItem veg={veg} key={veg.id}/>)}
      </ul>
    </div>
  )
}

export default Products
////