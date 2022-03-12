import * as React from "react"
import MainHeader from "./components/headers"
import MainFooter from "./components/footers"
import BriefImgArticle from "./components/articles"
import IndexContent from "./components/indexContent"

//Content:
import Articles from './content/indexArticles';
import profileImg from "./images/profile.jpg"

// markup
const IndexPage = () => {

  return (
    <main>
      <MainHeader class="w-full"/>

      <IndexContent class="px-4 mt-8 w-full" data={Articles}/>

      <content class="px-4 mt-8 w-full grid md:grid-cols-6 gap-y-8 gap-x-4 place-items-center">
        <div class="md:col-start-2 md:col-span-4 w-full">
          <BriefImgArticle image={profileImg} title="Hi, I'm Brandon" body="More info to come :)"/>
        </div>
      </content>

      <MainFooter/>
    </main>
  )
}

export default IndexPage
