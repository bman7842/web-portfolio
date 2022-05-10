import * as React from "react"
import { SummaryButton } from "./buttons"

/**
 * Renders a summary component based on inputted data following summary data structure.
 * @param {*} data 
 */
function Summary({ data }) {
    const title = data.title;
    const body = data.body;
    const experience = data.experience;
    const img = data.img;
    const button = data.button;

    const hasImg = (img!==undefined);

    const SummaryWrapper = ({ hasImg, children }) => {

        return (
            <div className={(hasImg ? 'col-span-2': 'col-span-3')+' flex flex-col p-4'}>
                {children}
            </div>
        )
    }

    const SummaryHeader = ({ title, experience }) => {

        const HeaderWrapper = ( { children } ) => {
            return (
                <div className="border-b">
                    {children}
                </div>
            )
        }

        const Title = ( { title } ) => {
            return (
                <h1 class="flex-none text-2xl font-sans font-bold">{title}</h1>
            )
        }

        if (experience !== undefined) {
            const dateStr = experience.date;
            const subtitle = experience.subtitle;
            
            return (
                <HeaderWrapper>
                    <div className="flex flex-col">
                        <Title title={title} />
                        <div className="flex justify-between">
                            <h2 className="italic text-slate-700">{subtitle}</h2>
                            <div className="flex items-end">
                                <p className="text-sm font-semibold opacity-40 text-yellow-700">{dateStr}</p>
                            </div>
                        </div>
                    </div>
                </HeaderWrapper>
            )
        }

        return (
            <HeaderWrapper>
                <Title title={title} />
            </HeaderWrapper>
        )
    }

    const SummaryBody = ({ body, button }) => {
        const hasButton = (button!==undefined);

        return (
            <div className="grow grid">
                <p class="flex-none font-sans font-light text-lg">{body}</p>
                {hasButton &&
                    <div class="m-auto place-items-center">
                        <SummaryButton data={button}/>
                    </div>
                }
            </div>
        )
    }

    return (
        <article class="transition ease-in duration-75 bg-stone-100 grid grid-cols-3 shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-600 hover:scale-101 border-slate-400 rounded-lg border md:h-72 sm:h-80 h-[25rem] w-full">
            {hasImg &&
                <div class="rounded-lg bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${img})`}}/>
            }
            <SummaryWrapper hasImg={hasImg}>
                <SummaryHeader title={title} experience={experience} />
                <SummaryBody body={body} button={button} />
            </SummaryWrapper>
        </article>
    )
}

//TODO: Add a separate button component, follows structure of button data json

export default Summary;