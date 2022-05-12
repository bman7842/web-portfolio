import React, { useState, useEffect } from "react"
import Slider from "../slider"
import styled from "styled-components"
import "../../../styles/memorizer/sceneAnimations.css"

const TextOutline = styled.h1`
    text-shadow: 1px 1px 2px gray;
`

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

/**
 * Draggable slider for easy, medium, hard
 * @param {*} param0 
 * @returns 
 */
const DifficultyScene = ( { setDifficulty } ) => {
    const [hovered, setHovered] = useState(Difficulty.NORMAL);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    })

    return (
        <div className="h-full">
            <div className={(animate ? "bouncedown " : "bouncedowninitial ") + "h-48 w-96 my-auto mx-auto flex flex-col space-y-4 text-center p-8 border border-gray-600 shadow-xl rounded-xl"}>
                <div>
                    <h2 className="italic text-gray-400">Difficulty:</h2>
                    <h1 style={hovered.style} className="font-extrabold text-4xl">
                        <TextOutline>                            
                            {hovered.text}
                        </TextOutline>
                    </h1>
                </div>
                <div className="w-min mx-auto flex-grow grid place-items-center">
                    <Slider options={[Difficulty.EASY, Difficulty.NORMAL, Difficulty.HARD, Difficulty.INSANE]} initial={Difficulty.NORMAL} displayUpdater={setHovered}/>
                </div>
            </div>
        </div>
    )
}

export default DifficultyScene