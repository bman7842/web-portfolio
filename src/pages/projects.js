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

        <ArticleGrid data={projectInfo}/>

        <MainFooter/>
      </main>
    )
  }
  
  export default ProjectsPage  