import React, { useState, useEffect } from "react"
import Slider from "../slider"
import GameButton from "../buttons"
import styled from "styled-components"
import { OpenCloseAnimation } from "../../animations/animation"
import { BounceUp, BounceDown } from "../../animations/bounceAnim"

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
const DifficultyScene = ( { startGame } ) => {
    const [hovered, setHovered] = useState(Difficulty.NORMAL);
    const [selected, setSelected] = useState(Difficulty.NORMAL);
    const [closing, setClosing] = useState(false);

    function closeScene() {
        setClosing(true);
    }

    function closeComplete() {
        startGame(selected);
    }

    return (
        <div className="h-full grid place-items-center">
            <OpenCloseAnimation OpenAnimation={BounceDown} CloseAnimation={BounceUp} closing={closing} closeCallback={closeComplete}>
                <div className="my-auto mx-auto flex flex-col space-y-4 text-center p-8 border border-gray-600 shadow-xl rounded-xl">
                    <section>
                        <h2 className="italic text-gray-400">Difficulty:</h2>
                        <h1 style={hovered.style} className="font-extrabold text-4xl">
                            <TextOutline>                            
                                {hovered.text}
                            </TextOutline>
                        </h1>
                    </section>
                    <section className="w-60 mx-auto h-8 grid place-items-center">
                        <Slider options={[Difficulty.EASY, Difficulty.NORMAL, Difficulty.HARD, Difficulty.INSANE]} initial={Difficulty.NORMAL} displayUpdater={setHovered} selectUpdater={(difficulty)=>{setSelected(difficulty)}}/>
                    </section>
                    <section className="mx-auto">
                        <GameButton text="PLAY" onClick={closeScene} />
                    </section>
                </div>
            </OpenCloseAnimation>
        </div>
    )
}

export default DifficultyScene