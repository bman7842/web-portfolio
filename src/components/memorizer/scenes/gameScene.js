import React from "react"

/**
 * Main memorizer game scene
 * @param {*} param0 
 */
const GameScene = ( { difficulty } ) => {
    return (
        <div>
            {difficulty.text}
        </div>
    )
}

export default GameScene