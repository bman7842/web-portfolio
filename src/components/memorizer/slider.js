import React, {useState} from "react"
import "../../styles/memorizer/slider.css"

/**
 * 
 * @param {number} length number of indents present in slider
 * @param {function} linker Linker function, results will be passed 0-(length-1)
 * @returns 
 */
const Slider = ( { options, initial, displayUpdater, selectUpdater } ) => {
    const [active, setActive] = useState((initial===undefined ? options[0] : initial));

    const SliderButton = ( { object } ) => {

        function onMouseEnter(e) {
            if (active !== object) {
                displayUpdater(object);
            }
        }

        function onMouseLeave(e) {
            if (active !== object) {
                displayUpdater(active);
            }
        }

        function onClick(e) {
            e.preventDefault();
            if (active !== object) {
                if (selectUpdater !== undefined){
                    selectUpdater(object);
                }

                setActive(object);
            }
        }

        return (
            <div className="relative w-0 grid place-items-center">            
                <button onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onClick} className="slideroption p-0.5 absolute w-6 h-6 rounded-full bg-gray-300 shadow-xl border-black/60 grid place-items-center">
                    <div className={(active===object ? "pulse w-full h-full border " : "slideroptioninset ") + "rounded-full bg-sky-300 border-black"} />
                </button>
            </div>
        )

    }

    return (
        <div className="rounded-xl transition-all ease-in-out duration-75 hover:rounded-full hover:h-7 hover:px-3 h-3 border-black border shadow-xl bg-slate-200/40 p-0.5">
            <div className="flex h-full space-x-16">
                {options.map((option, i) =>
                    <SliderButton object={option} />
                )}
            </div>
        </div>
    )
}

export default Slider