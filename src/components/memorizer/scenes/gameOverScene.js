import React from "react";
import GameButton from "../buttons";
import styled from "styled-components"

const TextOutline = styled.h1`
    text-shadow: 1px 1px 2px gray;
`

const GameOverScene = ({score, startOverCallback}) => {

    return (
        <div className="h-full w-full grid place-items-center">
            <div className="flex flex-col w-full space-y-6">
                <TextOutline className="text-center font-extrabold text-5xl text-red-500">GAME OVER</TextOutline>
                <h2 className="text-center text-xl"><span className="text-gray-600 italic">Score:</span> {score}</h2>
                <GameButton onClick={startOverCallback} text="Play Again"/>
            </div>
        </div>
    )
}

export default GameOverScene;