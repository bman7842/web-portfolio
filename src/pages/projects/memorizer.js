import * as React from "react"
import MainHeader from "../../components/headers"
import MainFooter from "../../components/footers"
import MemorizerGame from "../../components/memorizer/memorizerGame"
import MemorizerInfo from "../../components/memorizer/memorizerInfo"

const MemorizerPage = () => {

    return (
      <main class="w-full">
        <MainHeader selected="projects" subcat="memorizer"/>
        <div className="max-w-7xl mx-auto p-4">
          <div class="w-full py-2 flex divide-solid divide-x bg-stone-100 shadow-slate-600 shadow-md border-slate-400 rounded-lg border">
              <MemorizerGame />
              <MemorizerInfo />
          </div>
        </div>
        <MainFooter/>
      </main>
    )
  }
  
  export default MemorizerPage  