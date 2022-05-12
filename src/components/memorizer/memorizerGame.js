import React, { useState } from "react"
import DifficultyScene from "./scenes/difficultyScene"
import GameScene from "./scenes/gameScene"

const Scenes = {
    START: 0,
    DIFFICULTY: 1,
    GAME: 2
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

    return (
        <div className="flex-grow mx-2 p-2">
            {scene===Scenes.START &&
                <StartScene />
            }
            {scene===Scenes.DIFFICULTY &&
                <DifficultyScene setDifficulty={setDifficulty} />
            }
            {scene===Scenes.GAME &&
                <GameScene difficulty={difficulty} />
            }
        </div>
    )
}

export default MemorizerGame