import * as React from "react"

/**
 * A simple notepad design, can be lined or unlined and collapsible or uncollapsible.
 * @param {*} props 
 */
const Notepad = ({collapsible, lined, header, body}) => {
    return (
        <div className="w-full shadow-slate-600 shadow-sm flex-col text-center justify-items-center overflow-hidden bg-white rounded-xl border-black border">
            <h1 className="w-full bg-amber-200 opacity-50 font-extrabold underline">
                <span className="opacity-100">
                    {header}
                </span>
            </h1>
            <p>
                {body}
            </p>
        </div>
    )
}

export default Notepad;