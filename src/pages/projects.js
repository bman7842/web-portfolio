import * as React from "react"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"
import { ArticleGrid } from "../components/articleGrids"

//Content:
import { projectInfo } from '../content/projectsData';

const ProjectsPage = () => {

    return (
      <main class="w-full">
        <MainHeader selected="projects"/>

        <div class="w-full max-w-screen-xl mx-auto mt-8">
          <ArticleGrid data={projectInfo}/>
        </div>

        <MainFooter/>
      </main>
    )
  }
  
  export default ProjectsPage  