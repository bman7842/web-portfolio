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

const colorList = ["red", "green", "blue", "yellow"];

const TileDivHoverClick = styled.div`
    transition-property: transform;
    transition-duration: 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`

const GameTile = ( { id, playingTile, playingTileComplete } ) => {
    const [introAnimComplete, setIntroAnimComplete] = useState(false);

    const color = {
        backgroundColor: colorList[id]
    }
    
    if (playingTile === id) {
        return (
            <AnimationDiv animation={PartialWobble} callback={() => {playingTileComplete(id)}}>
                <div style={color} className="w-16 h-16 rounded border border-black" />
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
            <TileDivHoverClick style={color} className="w-16 h-16 rounded border border-black" />
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

function comparePatten(pattern1, pattern2) {
    return (
        pattern1.length === pattern2.length &&
        pattern1.every(function (element, index) {
            return element === pattern2[index];
        })
    );
}

/**
 * Main memorizer game scene
 * @param {*} param0 
 */
const GameScene = ( { difficulty } ) => {
    const [playingSequence, setPlayingSequence] = useState({active: false, index: 0});
    const [startCountdown, setStartCountdown] = useState(5);
    const [curTilePlaying, setCurTilePlaying] = useState(undefined);
    const [statusText, setStatusText] = useState("");
    const [score, setScore] = useState(0);
    const [gamePattern, setGamePattern] = useState([]);
    const [playerGuess, setPlayerGuess] = useState([]);

    const columns = {
        display: "grid",
        gridTemplateColumns: `repeat(${difficulty.columns}, minmax(0, 1fr))`,
    }

    useEffect(() => {
        if (!playingSequence.active && (gamePattern.length===0)) {
            countdownFunc();
        } else {
            startPlayingSequence()
        }
    }, [startCountdown, gamePattern]);

    function countdownFunc() {
        setStatusText(`Game starting in ${startCountdown}`)
        if (startCountdown === 0) {
            setTimeout(() => {addNew()}, 1000);
        }

        setTimeout(() => {setStartCountdown(startCountdown-1)}, 1000);
    }

    function startPlayingSequence() {
        if (playingSequence.active) {
            return;
        }

        setPlayingSequence({
            active: true,
            index: 0,
        });

        setStatusText("Playing Pattern...");
        console.log(gamePattern[playingSequence.index]);
        setTimeout(() => {setCurTilePlaying(gamePattern[playingSequence.index])}, 1000);
    }

    function stopPlayingSequence() {
        setStatusText("Repeat the Pattern:");
        setPlayingSequence({
            active: false,
            index: 0,
        });
        setCurTilePlaying(undefined);
    }

    function addNew() {
        setGamePattern(gamePattern.concat([Math.floor(Math.random() * (difficulty.tileCount))]));
    }

    function animationComplete() {
        if (playingSequence.index === gamePattern.length-1) {
            stopPlayingSequence();
        }
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
                <div>
                    <h1 className="text-center mb-8 italic font-semibold">{statusText}</h1>
                    <div style={columns} className="gap-4">
                        {[...new Array(difficulty.tileCount)].map((x, i) => 
                            <GameTile key={i} playingTile={curTilePlaying} animation={ExpandWobble} id={i} playingTileComplete={animationComplete} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GameScene