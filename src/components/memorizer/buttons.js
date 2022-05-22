import React from "react"

const GameButton = ({ onClick, text }) => {

    function preventDefault(e) {
        e.preventDefault();
        onClick(e);
    }

    return (
        <button onClick={preventDefault} className="transition ease-in-out hover:scale-105 hover:shadow-sm mx-auto px-8 py-2 border-4 rounded-md border-sky-300/50 bg-sky-300/50">
            <span className="text-lg font-bold text-gray-600">{text}</span>
        </button>
    )
}

export default GameButton