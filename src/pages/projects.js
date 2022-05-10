import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import { SummaryGrid } from "../components/summaryGrid"

//Content:
import { projectInfo } from '../content/projectsData';

const ProjectsPage = () => {

    return (
      <main class="w-full">
        <MainHeader selected="projects"/>

        <div className="w-full max-w-screen-xl mx-auto my-8">
        <SummaryGrid data={projectInfo} />
        </div>

        <MainFooter/>
      </main>
    )
  }
  /**
   *         <div class="w-full max-w-screen-xl mx-auto my-8">
          <ArticleGrid data={projectInfo}/>
        </div>
   */
  export default ProjectsPage  