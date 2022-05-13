import React, { useState } from "react"
import DifficultyScene from "./scenes/difficultyScene"
import GameScene from "./scenes/gameScene"
import { FadeIn, FadeOut } from "../animations/fadeAnim"
import { OpenCloseAnimation } from "../animations/animation"
import GameButton from "./buttons"

const Scenes = {
    START: 0,
    DIFFICULTY: 1,
    GAME: 2
}

const StartScene = ( { setScene } ) => {
    const [closing, setClosing] = useState(false);

    function StartGame(e) {
        e.preventDefault();
        if (!closing) {
            setClosing(true);
        }
    }

    return (
        <div className="grid h-full place-items-center">
            <OpenCloseAnimation OpenAnimation={FadeIn} CloseAnimation={FadeOut} closing={closing} closeCallback={()=>{setScene(Scenes.DIFFICULTY)}}>
                <div className={"flex flex-col space-y-2"}>
                    <p className="text-sm text-black/60 italic">Your journey begins here...</p>
                    <GameButton onClick={StartGame} text="BEGIN"/>
                </div>
            </OpenCloseAnimation>
        </div>
    )
}

const MemorizerGame = () => {
    const [scene, setScene] = useState(Scenes.START);
    const [difficulty, setDifficulty] = useState(undefined);

    function startGame(difficulty) {
        setDifficulty(difficulty);
        setScene(Scenes.GAME);
    }

    return (
        <div className="flex-grow overflow-hidden">
            {scene===Scenes.START &&
                <StartScene setScene={setScene} />
            }
            {scene===Scenes.DIFFICULTY &&
                <DifficultyScene startGame={startGame} />
            }
            {scene===Scenes.GAME &&
                <GameScene difficulty={difficulty} />
            }
        </div>
    )
}

export default MemorizerGame