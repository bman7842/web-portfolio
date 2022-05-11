import React, { useState }from "react"
import Notepad from "./notepad"

const MemorizerGuide = () => {
    const header = "Guide";
    const GuideBody = () => {
        return (
            <div className="text-sm text-gray-600">
                <p>
                    The goal of memorizer is to remember the pattern played to you and repeat it.
                </p>
                <p className="pt-4">
                    Patterns occur in a sequence, where an additional action will be added each time, meaning you must repeat the previous sequence along with the new addition.
                </p>
            </div>
        )
    }

    return(
        <div className="w-full mx-auto py-2">
            
            <Notepad lined={false} header={header} collapsible={true}>
                <GuideBody />
            </Notepad>

        </div>
    )
}

const MemorizerGame = () => {

    return (
        <div className="transition ease-in-out hover:scale-x-[1.02] hover:scale-y-[1.07] flex-grow mx-2 bg-slate-400/25 rounded-lg p-2 grid place-items-center shadow-lg border-2 hover:border-4 border-gray-800/80">
            <h1>test</h1>
        </div>
    )
}

const MemorizerInfo = () => {
    return (
        <div className="w-4/12 px-4 flex-col space-y-2 justify-items-center">
            <div className="text-center flex-col justify-items-center border-b pb-2 mx-20">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-900 via-slate-500 to-gray-200">
                    Memorizer
                </h1>
                <h2 className="text-xs font-light italic">
                    The ultimate memorization game
                </h2>
            </div>
            <MemorizerGuide />
        </div>
    )
}

const Memorizer = () => {
    return (
        <div class="w-full py-2 flex divide-solid divide-x bg-stone-100 shadow-slate-600 shadow-md border-slate-400 rounded-lg border">
            <MemorizerGame />
            <MemorizerInfo />
        </div>
    )
}

export default Memorizer