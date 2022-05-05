import * as React from "react"

/**
 * Types of summaries available.
 * default = a default summary containing a title and body.
 * experience = a summary formatted to contain experience. Better structured for information
 * such as date experience occured, title, and other experience related information.
 */
const SummaryType = {
    DEFAULT: "default",
    EXPERIENCE: "experience",
}

/**
 * Renders a summary component based on inputted data following summary data structure.
 * @param {*} data 
 */
function Summary({ data }) {
    const title = data.title;
    const body = data.body;
    const type = (data.type === undefined ? SummaryType.DEFAULT : data.type);
    const img = data.img;
    const button = data.button;

    const hasImg = (img!==undefined);
    const hasButton = (button!==undefined);

    const SummaryWrapper = (props) => {
        return (
            <div className={(hasImg ? 'col-span-2': 'col-span-3')+' flex flex-col p-4'}>
                {props.children}
            </div>
        )
    }

    return (
        <article class="transition ease-in duration-75 bg-gray-100 grid grid-cols-3 shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-600 hover:scale-101 border-slate-400 rounded-lg border sm:h-72 h-96 w-full">
            {hasImg &&
                <div class="rounded-lg bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${img})`}}/>
            }
            <SummaryWrapper>
                <h1 class="flex-none text-4xl font-mono font-bold border-b">{title}</h1>
                <p class="flex-none">{body}</p>
            </SummaryWrapper>
        </article>
    )
}

//TODO: Add a separate button component, follows structure of button data json

export default Summary;
export { SummaryType }