import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import BriefImgArticle from "../components/articles"
import GbiBridged from "../components/test"

// markup
const IndexPage = () => {
  return (
    <main>
      <MainHeader class="w-full"/>

      <content class="px-4 mt-8 w-full grid md:grid-cols-6 gap-y-8 gap-x-4 place-items-center">
        <div class="md:col-start-2 md:col-span-4 w-full">
          <BriefImgArticle/>
        </div>
      </content>

      <MainFooter/>
    </main>
  )
}

export default IndexPage
