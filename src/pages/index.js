import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import BriefImgArticle from "../components/imgArticle"
import IndexContent from "../components/indexContent"

//Content:
import { Articles } from '../content/indexData';
import profileImg from "../images/profile.jpg"

// markup
const IndexPage = () => {

  return (
    <main class="w-full">
      <MainHeader/>

      <IndexContent data={Articles}/>

      <MainFooter/>
    </main>
  )
}

export default IndexPage
