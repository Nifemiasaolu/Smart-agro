import { FiUser } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

function ArticleItem({ article: { imgUrl, name, NumComments, text, id } }) {
  return (
    <li>
      <div>
        <img src={imgUrl} alt="" />
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <FiUser className="text-golden"/>
          <p className="p-gothic text-xs">by {name}</p>
        </div>

        <div className="flex items-center gap-1">
          <FaRegComment className="text-golden"/>
          <p className="p-gothic text-xs">{NumComments} comments</p>
        </div>
      </div>

      <h1>{text}</h1>
    </li>
  );
}

export default ArticleItem;
