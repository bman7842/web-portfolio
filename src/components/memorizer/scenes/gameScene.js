import React, {useEffect, useState} from "react"
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

const PartialWobbleDur = 1;
const PartialWobble = new Animation(PartialWobbleDur, styled.div`
    animation-duration: ${PartialWobbleDur}s;
    animation-name: partialwobble;
    transform: scale(1);

    @keyframes partialwobble {
        0% {
            transform: scale(1.0);
        }
        50% {
            transform: scale(0.5);
        }
        75% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`)

/**
 * See if we can automate this?
 */
const colorList = ["#ff0000", "#54a832", "#0015ff", "#ffee00", "#924E7D", "#fc3d03", "#00ffb3", "#1E2460", "#332F2C", 
                   "#193737", "#A98307", "#84C3BE", "#8F8B66", "#8E402A", "#231A24", "#063971", "#E6D690", "#8D948D",
                   "#84C3BE", "#FF7514", "#5E2129", "#89AC76", "#497E76", "#D36E70", "#26252D", "#8673A1", "#A12312",
                   "#955F20", "#F4A900", "#6A5F31", "#F75E25", "#57A639", "#7FB5B5", "#B32821", "#CF3476", "#606E8C"];

const TileDivHoverClick = styled.button`
    transition-property: transform;
    transition-duration: 0.1s;

    &:hover {
        transform: scale(1.1);
    }

    &:active:hover {
        transform: scale(0.8);
    }
`

const GameTile = ( { id, playingTile, playingTileComplete, onClick } ) => {
    const [introAnimComplete, setIntroAnimComplete] = useState(false);

    const color = {
        backgroundColor: colorList[id]
    }

    function onButtonClick(e) {
        e.preventDefault();
        onClick(id);
    }
    
    if (playingTile === id) {
        return (
            <AnimationDiv animation={PartialWobble} callback={() => {playingTileComplete(id)}}>
                <button style={color} className="w-16 h-16 rounded border border-black"></button>
            </AnimationDiv>
        )
    }

    if (!introAnimComplete) {
        return (
            <AnimationDiv callback={()=>{setIntroAnimComplete(true)}} animation={ExpandWobble}>
                <TileDivHoverClick style={color} className="w-16 h-16 rounded border border-black" />
            </AnimationDiv>
        )
    }

    return (
        <div>
            <TileDivHoverClick onClick={onButtonClick} style={color} className="w-16 h-16 rounded border border-black" />
        </div>
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
const GameScene = ( { difficulty, gameOverCallback } ) => {
    const [startCountdown, setStartCountdown] = useState(5);
    const [curTilePlaying, setCurTilePlaying] = useState(undefined);
    const [statusText, setStatusText] = useState("");
    const [playingSequence, setPlayingSequence] = useState(false);
    const [score, setScore] = useState(0);
    const [gamePattern, setGamePattern] = useState([]);
    const [playerGuess, setPlayerGuess] = useState([]);

    const columns = {
        display: "grid",
        gridTemplateColumns: `repeat(${difficulty.columns}, minmax(0, 1fr))`,
    }

    function countdownFunc() {
        setStatusText(`Game starting in ${startCountdown}`)
        if (startCountdown === 0) {
            setTimeout(() => {addNew()}, 1000);
            return;
        }

        setTimeout(() => {setStartCountdown(startCountdown-1)}, 1000);
    }

    function startPlayingSequence() {
        if (playingSequence) {
            return;
        }

        setPlayingSequence(true);
        setStatusText("Playing Pattern...");

        gamePattern.forEach(function (id, i) {
            const delay = (i+0.5)*1000

            if (i>0 && gamePattern[i-1] === id) {
                setTimeout(() => {setCurTilePlaying(undefined)}, delay-1);
            }
            setTimeout(() => {setCurTilePlaying({id: id, index: i})}, delay);
        });
    }

    function stopPlayingSequence() {
        setStatusText("Repeat the Pattern:");
        setPlayingSequence(false);
        setCurTilePlaying(undefined);
    }

    function addNew() {
        setGamePattern(gamePattern.concat([Math.floor(Math.random() * (difficulty.tileCount))]));
    }

    function animationComplete(id) {
        if (curTilePlaying.index === gamePattern.length-1) {
            stopPlayingSequence();
        }
    }

    function tileClicked(id) {
        if (playingSequence === true || !gamePattern || gamePattern.length === 0) {
            return;
        }

        const compareIndex = playerGuess.length;
        if (gamePattern[compareIndex] !== id) {
            setStatusText("INCORRECT");
            gameOverCallback(score);
            return;
        }

        if (compareIndex+1 === gamePattern.length) {
            addNew();
            setPlayerGuess([]);
            setScore(score+1);
            return
        } 

        setStatusText("Correct, sequence progress: " + Math.ceil(((compareIndex+1)/gamePattern.length)*100) +"%")
        setPlayerGuess(playerGuess.concat([id]));
    }

    useEffect(() => {
        if (!playingSequence && (gamePattern.length===0)) {
            countdownFunc();
        } else {
            startPlayingSequence()
        }
    }, [startCountdown, gamePattern]);

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
            <section className="pt-4">
                <h1 className="text-center mb-8 italic font-semibold">{statusText}</h1>
            </section>
            <section className="flex-grow grid w-full place-items-center p-4">
                <div>
                    <div style={columns} className="gap-4">
                        {[...new Array(difficulty.tileCount)].map((x, i) => 
                            <GameTile onClick={tileClicked} key={i} playingTile={curTilePlaying && curTilePlaying.id} animation={ExpandWobble} id={i} playingTileComplete={animationComplete} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GameScene