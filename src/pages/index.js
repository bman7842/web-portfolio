import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import SiteMeta from "../components/metaData"
import { SummaryGrid } from "../components/summaryGrid"

import { Summaries } from '../content/indexData';


function IndexSummaries() {

  return (
      <div class="w-full max-w-screen-xl mx-auto my-8">
          <SummaryGrid data={Summaries}/>
      </div>
  );
}

const IndexPage = () => {

  return (
    <main class="w-full">
      <SiteMeta rel="home" href="https://thisisbrandon.xyz/"></SiteMeta>
      <MainHeader selected="home"/>
      <IndexSummaries/>
      <MainFooter/>
    </main>
  )
}

export default IndexPage
