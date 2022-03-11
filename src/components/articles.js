import background from "../images/profile.jpg"
import * as React from "react"

function BriefImgArticle() {
    return (
        <article class="grid grid-cols-3 shadow-md shadow-slate-400 border-2 border-black rounded h-96 w-full">
            <div class="bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${background})`}}>
            </div>
            <div class="flex flex-col col-span-2 p-4">
                <h1 class="flex-none text-4xl font-mono font-bold border-b">Hi, I'm Brandon...</h1>
                <p class="flex-none">More info to come :)</p>
                <div class="grow grid place-items-center">
                <button class="border-2 border-gray-400 px-2 rounded-lg bg-sky-200 drop-shadow-sm ease-in transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
                    <b>More Info</b>
                </button>
                </div>
            </div>
        </article>

    )
}

export default BriefImgArticle