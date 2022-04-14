import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import SiteMeta from "../components/metaData"
import { ArticleGrid } from "../components/articleGrids"

//Content:
import { Articles } from '../content/indexData';

// markup

function IndexArticles(props) {

  return (
      <div class="w-full max-w-screen-xl mx-auto my-8">
          <ArticleGrid data={Articles}/>
      </div>
  );
}

const IndexPage = () => {

  return (
    <main class="w-full">
      <SiteMeta rel="home" href="https://thisisbrandon.xyz/"></SiteMeta>
      <MainHeader selected="home"/>
      <IndexArticles/>
      <MainFooter/>
    </main>
  )
}

export default IndexPage
