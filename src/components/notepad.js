import React, { useState }from "react"

const linedBackgroundStyle = {
    background: `repeating-linear-gradient(white, white 25px, #2F4F4F 26px, #A9A9A9 27px)`
}

/**
 * A simple notepad design, can be lined or unlined and collapsible or uncollapsible.
 * @param {*} props 
 */
const Notepad = ({ collapsible, lined, header, body, startCollapsed }) => {
    const [collapsed, setCollapsed] = useState(startCollapsed === undefined ? false : startCollapsed);

    if (collapsible === undefined) {
        collapsible = false;
    }
    if (lined === undefined || lined === null) {
        lined = false;
    }

    function handleCollapse(e) {
        e.preventDefault();
        setCollapsed(!collapsed);
    }

    const CollapsibleArrow = () => {
        const arrow = collapsed ? "▼" : "▲";

        return (
            <button onClick={handleCollapse} className="absolute right-0 top-0 left-0 bottom-0 opacity-50 transition ease-in hover:opacity-100">
                <span className="absolute right-2 top-0">{arrow}</span>
            </button>
        )
    }

    return (
        <div className="w-full shadow-slate-600 shadow-sm flex-col text-center justify-items-center overflow-hidden bg-white rounded-xl border-black border">
            <div className= "relative w-full bg-amber-200/50">
                <h1 className="justify-center w-full font-extrabold">
                    <span className="opacity-75">
                        {header}
                    </span>
                </h1>
                {collapsible &&
                    <CollapsibleArrow />
                }
            </div>
            {/*{!collapsed &&
                <div style={ lined ? linedBackgroundStyle : {} } className="">
                    <p>
                        {body}
                    </p>
                </div>
            }*/}
            <div style={ lined ? linedBackgroundStyle : {} } className={collapsed ? "hidden" : ""}>
                <p>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default Notepad;