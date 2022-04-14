import * as React from "react"
import { Link } from "gatsby"
import MainHeader from "../components/headers"
import MainFooter from "../components/footers"

// markup
const NotFoundPage = () => {
  return (
    <main class="flex flex-col h-screen">
        <MainHeader/>

        <div class="flex-grow grid place-items-center">
          <div class="bg-amber-200 grid place-items-center shadow-deepInner shadow-slate-800 rounded-lg p-8 m-4">
            <div>
              <h1 class="text-center md:text-8xl text-4xl border-b border-gray-500 mx-4 py-4"><b>GASP! 😨️</b></h1>
              <h3 class="text-center md:text-xl text-lg border-b border-gray-500 mx-4 py-4">404 here, 404 there...It appears you've stumbled down the wrong path</h3>
              <div class="mt-8 grid place-items-center">
                <Link to="/">
                  <div class="p-2 border border-transparent rounded-lg ease-in-out duration-100 transition hover:shadow-lg hover:scale-110 hover:bg-zinc-300/50 hover:border hover:border-gray-500">
                    <b class="md:text-xl text-lg">RETURN HOME</b>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <MainFooter class="mb-0"/>
    </main>
  )
}

export default NotFoundPage
