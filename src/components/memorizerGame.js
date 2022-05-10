import React, { useState }from "react"
import Notepad from "./notepad"

const MemorizerGuide = () => {
    const header = "Guide";
    const body = "The goal of memorizer is memorize the patterns displayed on the screen.";

    return(
        <div className="w-full mx-auto">
            
            <Notepad lined={false} header={header} body={body} collapsible={true} />

        </div>
    )
}

const MemorizerGame = () => {
    return (
        <div className="flex-grow px-4">
            <h1>test</h1>
        </div>
    )
}

const MemorizerInfo = () => {
    return (
        <div className="w-4/12 px-4 flex-col space-y-2 justify-items-center">
            <div className="text-center flex-col justify-items-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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