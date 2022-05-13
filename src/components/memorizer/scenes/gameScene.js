import React, {useState} from "react"
import Animation, { AnimationDiv } from "../../animations/animation"
import styled from "styled-components"

const ExpandWobbleDur = 1;
const ExpandWobble = new Animation(ExpandWobbleDur, styled.div`
    animation-duration: ${ExpandWobbleDur}s;
    animation-name: expandwobble;
    transform: scale(1);

    @keyframes expandwobble {
        0% {
            transform: scale(0);
        }
        75% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
`)

const colorList = ["red", "green", "blue", "yellow"];

const GameTile = ( { id } ) => {
    const style = {
        backgroundColor: colorList[id],
    }

    return (
        <AnimationDiv animation={ExpandWobble}>
            <div style={style} className="w-16 h-16 rounded border border-black">
            </div>
        </AnimationDiv>
    )
}

const SplitRow = ( {children} ) => {
    return (
        <div className="py-1 flex divide-x divide-gray-400 text-gray-900 bg-gray-200 rounded">
            {children}
        </div>
    )
}

/**
 * Main memorizer game scene
 * @param {*} param0 
 */
const GameScene = ( { difficulty } ) => {
    const [animating, setAnimating] = useState(true);
    const [score, setScore] = useState(0);

    const columns = {
        display: "grid",
        gridTemplateColumns: `repeat(${difficulty.columns}, minmax(0, 1fr))`,
    }

    return (
        <div className="h-full flex flex-col">
            <section className="py-1 px-3 flex w-full justify-between bg-gray-500 overflow-hidden border-b-2 border-gray-600 drop-shadow-lg">
                <SplitRow>
                    <span className="px-2 text-sm text-gray-600 font-bold">Difficulty</span>
                    <span style={difficulty.style} className="px-2 text-sm">{difficulty.text}</span>
                </SplitRow>
                <SplitRow>
                    <span className="px-2 text-sm text-gray-600 font-bold">Score</span>
                    <span className="px-2 text-sm">{score}</span>
                </SplitRow>
            </section>
            <section className="flex-grow grid w-full place-items-center p-4">
                <div style={columns} className="gap-4">
                    {[...new Array(difficulty.tileCount)].map((x, i) => 
                        <GameTile id={i} />
                    )}
                </div>
            </section>
        </div>
    )
}

export default GameScene