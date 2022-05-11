import React, { useState }from "react"
import styled from "styled-components"
import Notepad from "./notepad"

const TextOutline = styled.h1`
    text-shadow: 1px 1px 2px black;
`
const Scenes = {
    START: 0,
    DIFFICULTY: 1,
    GAME: 2
}

const Difficulty = {
    EASY: {
        text: "EASY",
        style: {
            color: "green"
        }
    },
    NORMAL: {
        text: "NORMAL",
        style: {
            color: "yellow",
        }
    },
    HARD: {
        text: "HARD",
        style: {
            color: "orange"
        }
    },
    INSANE: {
        text: "INSANE",
        style: {
            color: "red"
        }
    },
}

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


const MemorizerGame = () => {
    const [scene, setScene] = useState(Scenes.START);
    const [difficulty, setDifficulty] = useState(undefined)

    function StartGame(e) {
        e.preventDefault();
        setScene(Scenes.DIFFICULTY);
    }

    const StartScene = () => {
        return (
            <div className="grid h-full place-items-center">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm text-black/60 italic">Your journey begins here...</p>
                    <button onClick={StartGame} className="transition ease-in-out hover:scale-105 hover:shadow-sm w-min mx-auto px-8 py-2 border-4 rounded-md border-sky-300/50 bg-sky-300/50">
                        <span className="text-lg font-bold text-gray-600">START</span>
                    </button>
                </div>
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
        const [hovered, setHovered] = useState(undefined);

        const SliderButton = ( { object } ) => {

            function onMouseEnter(e) {
                displayUpdater(object);
                setHovered(object);
            }

            function onMouseLeave(e) {
                displayUpdater(active);
                setHovered(undefined);
            }

            function onClick(e) {
                e.preventDefault();
                if (selectUpdater !== undefined){
                    selectUpdater(object);
                }

                setActive(object);
            }

            return (
                <div className="relative w-0 grid place-items-center">            
                    <button onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onClick} className="absolute w-5 h-5 rounded-full bg-gray-800 grid place-items-center">
                        <div className="group w-4 h-4 rounded-full bg-gray-200 grid place-items-center">
                            <div className={(active===object || hovered===object ? "w-3 h-3 rounded-full bg-gray-800" : "") + " group-hover:scale-125 transition"} />
                        </div>
                    </button>
                </div>
            )

        }

        return (
            <div className="rounded-xl bg-black p-0.5">
                <div className="flex h-3 space-x-16 bg-gray-400">
                    {options.map((option, i) =>
                        <SliderButton object={option} />
                    )}
                </div>
            </div>
        )
    }

    /**
     * Draggable slider for easy, medium, hard
     * @param {*} param0 
     * @returns 
     */
    const DifficultyScene = ( { action } ) => {
        const [hovered, setHovered] = useState(Difficulty.NORMAL);

        return (
            <div className="grid h-full place-items-center">
                <div className="flex flex-col space-y-4 text-center">
                    <div>
                        <h2 className="italic text-gray-400">Difficulty:</h2>
                        <h1 style={hovered.style} className="font-extrabold text-4xl">
                            <TextOutline>                            
                                {hovered.text}
                            </TextOutline>
                        </h1>
                    </div>
                    <Slider options={[Difficulty.EASY, Difficulty.NORMAL, Difficulty.HARD, Difficulty.INSANE]} initial={Difficulty.NORMAL} displayUpdater={setHovered}/>
                    <button className="font-normal hover:font-bold bg-green-200 border border-gray-800 rounded-xl py-2">
                        BEGIN
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-grow mx-2 p-2">
            {scene===Scenes.START &&
                <StartScene />
            }
            {scene===Scenes.DIFFICULTY &&
                <DifficultyScene />
            }
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

const Memorizer = () => {
    return (
        <div class="w-full py-2 flex divide-solid divide-x bg-stone-100 shadow-slate-600 shadow-md border-slate-400 rounded-lg border">
            <MemorizerGame />
            <MemorizerInfo />
        </div>
    )
}

export default Memorizer