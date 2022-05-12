import React from "react"
import Notepad from "../notepad"

const MemorizerGuide = () => {
    const header = "Guide";
    const GuideBody = () => {
        return (
            <div className="text-sm text-gray-600 mx-auto">
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

const MemorizerInfo = () => {
    return (
        <div className="w-4/12 px-4 flex-col space-y-2 justify-items-center">
            <div className="text-center flex-col justify-items-center border-b pb-2 mx-auto w-min">
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

export default MemorizerInfo