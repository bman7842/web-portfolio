import React, {useState} from "react"
import "../../styles/memorizer/slider.css"

const SliderButton = ( { object, setHovered, onSelection, active } ) => {
    function onMouseEnter(e) {
        setHovered(object);
    }

    function onMouseLeave(e) {
        setHovered(undefined);
    }

    function onClick(e) {
        e.preventDefault();
        onSelection(object);
    }

    return (
        <div className="relative w-0 grid place-items-center">            
            <button onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onClick} className="slideroption p-0.5 absolute w-6 h-6 rounded-full bg-gray-300 shadow-xl border-black/60 grid place-items-center">
                <div className={(active===object ? "pulse w-full h-full border " : "slideroptioninset ") + "rounded-full bg-sky-300 border-black"} />
            </button>
        </div>
    )
}

/**
 * 
 * @param {number} length number of indents present in slider
 * @param {function} linker Linker function, results will be passed 0-(length-1)
 * @returns 
 */
const Slider = ( { options, initial, displayUpdater, selectUpdater } ) => {
    const [active, setActive] = useState((initial===undefined ? options[0] : initial));

    function updateDisplayed(object) {
        if (active !== object) {
            if (object === undefined) {
                displayUpdater(active);
            } else {
                displayUpdater(object)
            }
        }
    }

    function updateHover(object) {
        updateDisplayed(object);
    }

    function updateActive(object) {
        updateDisplayed(object);
        if (object !== undefined && object !== active) {
            setActive(object);
        }
    }

    return (
        <div className="rounded-xl transition-all ease-in-out duration-75 hover:rounded-full hover:h-7 hover:px-3 h-3 border-black border shadow-xl bg-slate-200/40 p-0.5">
            <div className="flex h-full space-x-16">
                {options.map((option, i) =>
                    <SliderButton setHovered={updateHover} onSelection={updateActive} active={active} object={option} />
                )}
            </div>
        </div>
    )
}

export default Slider