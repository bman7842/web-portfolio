import * as React from "react"
import { Link } from "gatsby"

/*
Type: either "local-link", "link", "action"
*/
function ImgArticleDefault({image, title, body, button, type}) {

    const ArticleInteract = () => {
        if (button !== undefined) {
            if (button.type === "action") {
                return (
                    <button class="border-2 border-gray-400 px-2 rounded-lg bg-sky-200 drop-shadow-md ease-in-out transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
                        <b>More Info</b>
                    </button>
                )
            } else if (button.type === "local-link") {
                return (
                    <div class="border-2 border-gray-400 px-2 rounded-lg bg-sky-200 drop-shadow-md ease-in-out transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
                        <Link to={button.link} class="w-full">
                            <b>More Info</b>
                        </Link>
                    </div>
                )
            } else if (button.type === "link") {
                return (
                    <a href={button.link} class="border-2 border-gray-400 px-2 rounded-lg bg-sky-200 drop-shadow-md ease-in-out transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
                        <b>More Info</b>
                    </a>
                )
            }
        }
        return (<div></div>);
    }

    return (
        <article class="transition ease-in duration-75 bg-gray-100 grid grid-cols-3 shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-600 hover:scale-101 border-slate-400 rounded-lg border sm:h-72 h-96 w-full">
            <div class="rounded-lg bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${image})`}}>
            </div>
            <div class="flex flex-col col-span-2 p-4">
                <h1 class="flex-none text-4xl font-mono font-bold border-b">{title}</h1>
                <p class="flex-none">{body}</p>
                <div class="grow grid place-items-center">
                <ArticleInteract/>
                </div>
            </div>
        </article>

    )
}

function ImgArticle(props) {

    return (
        <div>
            <ImgArticleDefault title={props.title} image={props.image} body={props.body} type={props.type} button={props.button} />
        </div>
    )
}

export { ImgArticle };