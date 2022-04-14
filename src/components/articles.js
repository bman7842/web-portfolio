import * as React from "react"

function BriefImgArticle(props) {
    const image = props.image;
    const title = props.title;
    const body = props.body;

    return (
        <article class="transition ease-in duration-75 bg-gray-100 grid grid-cols-3 shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-600 hover:scale-101 border-slate-400 rounded-lg border sm:h-72 h-96 w-full">
            <div class="rounded-lg bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${image})`}}>
            </div>
            <div class="flex flex-col col-span-2 p-4">
                <h1 class="flex-none text-4xl font-mono font-bold border-b">{title}</h1>
                <p class="flex-none">{body}</p>
                <div class="grow grid place-items-center">
                <button class="border-2 border-gray-400 px-2 rounded-lg bg-sky-200 drop-shadow-md ease-in-out transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
                    <b>More Info</b>
                </button>
                </div>
            </div>
        </article>

    )
}

export { BriefImgArticle };