import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MainHeader = () => {
    return (
        <header class="w-full">
            <div class="w-full grid place-items-center">
                <StaticImage href="index.html" class="w-96" src="../images/logo.png" />
            </div>

            <div class="w-full grid place-items-center">
                <nav class="flex items-center space-x-2">
                    <a href=""
                        class="py-4 px-2 text-cyan-700 border-b-4 border-cyan-800 font-semibold ">Home</a>
                    <div class="relative group">
                    <a href="" class="w-full px-2 py-4 mt-2 md:w-auto md:inline mt-0 text-gray-500 font-semibold hover:text-cyan-700 transition duration-300">
                        Projects
                    </a>
                    <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                    
                        <div class="w-32 rounded p-2 pb-2 bg-white bg-gray-200 shadow-lg">
                        <ul class="grid place-items-center grid-cols-1 gap-2">
                            <a href="" class="hover:text-cyan-700 transition duration-300">timeclock</a>
                            <a href="" class="hover:text-cyan-700 transition duration-300">memorizer</a>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <a href=""
                        class="py-4 px-2 text-gray-500 font-semibold hover:text-cyan-700 transition duration-300">
                        Portfolio</a>
                    <a href=""
                        class="py-4 px-2 text-gray-500 font-semibold hover:text-cyan-700 transition duration-300">
                        Contact</a>

                </nav>
            </div>

        </header>
    )
}

export default MainHeader