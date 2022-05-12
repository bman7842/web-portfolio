import React, { useState } from "react"
import Slider from "../slider"
import styled from "styled-components"

const TextOutline = styled.h1`
    text-shadow: 1px 1px 2px black;
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

            </div>
        </div>
    )
}

export default DifficultyScene