import * as React from "react"
import MainHeader from "../../components/headers"
import MainFooter from "../../components/footers"
import MemorizerGame from "../../components/memorizer/memorizerGame"
import MemorizerInfo from "../../components/memorizer/memorizerInfo"

const MemorizerPage = () => {

    return (
      <main class="w-full h-screen flex flex-col">
        <MainHeader selected="projects" subcat="memorizer"/>
        <div className="max-w-7xl w-full mx-auto p-4 flex-grow">
          <div class="h-full w-full flex bg-stone-100 shadow-slate-600 shadow-md border-slate-400 rounded-lg border">
              <MemorizerGame />
              <MemorizerInfo />
          </div>
        </div>
        <MainFooter/>
      </main>
    )
  }
  
  export default MemorizerPage