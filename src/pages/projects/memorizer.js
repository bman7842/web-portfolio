import * as React from "react"
import MainHeader from "../../components/headers"
import MainFooter from "../../components/footers"
import Memorizer from "../../components/memorizerGame"

const MemorizerPage = () => {

    return (
      <main class="w-full">
        <MainHeader selected="projects" subcat="memorizer"/>
        <div className="max-w-4xl mx-auto p-4">
          <Memorizer />
        </div>
        <MainFooter/>
      </main>
    )
  }
  
  export default MemorizerPage  