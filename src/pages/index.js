import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import { BriefImgArticle } from "../components/articles"
import { ArticleGrid } from "../components/articleGrids"

//Content:
import { Articles } from '../content/indexData';

// markup

function IndexArticles(props) {

  return (
      <div class="w-full max-w-xl mt-8">


          <ArticleGrid data={Articles}/>
      </div>
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
