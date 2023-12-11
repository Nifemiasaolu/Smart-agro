import { images, data } from "../Constants"
import ArticleItem from "../Features/ArticleItem"

function News() {
  return (
    <div id="news" className="bg-darkGreen section-padding">
      {/* <div>
        <img src={images.articleFaintStyle} alt="Article style" />
      </div> */}

       <div>
        <p className="p-gothic mb-[10px] text-center text-[10px] uppercase">
          From the Blog
        </p>
        <h1 className="p-livvic mb-[1rem]  text-center text-lg font-bold capitalize  ">
          News & Article
        </h1>
      </div>

      <ul>
        {data.articles.map(article=> <ArticleItem article={article} key={article.id}/>)}
      </ul>
    </div>
  )
}

export default News
