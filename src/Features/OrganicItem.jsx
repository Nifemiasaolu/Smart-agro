import { images } from "../Constants"

function OrganicItem({organ}) {
  return (
    <li className="flex items-center gap-4 ">
      <div>
        <img src={images.check} alt="check" className="w-[15px]"/>
      </div>
      <div>
        <p className="text-xs">{organ.text}</p>
      </div>
    </li>
  )
}

export default OrganicItem
/////