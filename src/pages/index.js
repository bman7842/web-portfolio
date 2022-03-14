import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import { BriefImgArticle } from "../components/articles"
import { ArticleGrid } from "../components/articleGrids"

//Content:
import { Articles } from '../content/indexData';

// markup

function IndexArticles(props) {
  const headArticle = Articles.head;
  const gridArticles = Articles.grid;

  return (
      <content class="px-4 mt-8 w-full place-items-center">
          <div class="w-full grid md:grid-cols-6 gap-y-8 gap-x-4 place-items-center">
              <div class="md:col-start-2 md:col-span-4 w-full">
                  <BriefImgArticle title={headArticle.title} image={headArticle.image} body={headArticle.body}/>
              </div>
          </div>

          <ArticleGrid data={gridArticles}/>
      </content>
  );
}

const IndexPage = () => {

  return (
    <main class="w-full">
      <MainHeader/>

      <IndexArticles/>

      <MainFooter/>
    </main>
  )
}

export default IndexPage
