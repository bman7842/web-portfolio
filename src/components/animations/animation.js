import React, {useEffect, useState} from "react"

class Animation {
    constructor(duration, style) {
        this.duration = duration;
        this.style = style;
    }
}

/**
 * Duration in seconds, animation plays once component rendered
 * @param {} param0 
 * @returns 
 */
const AnimationDiv = ( { animation, children, callback } ) => {

    function waitAnimation() {
        setTimeout(() => {
            if (callback !== undefined) {
                callback();
            }
        }, animation.duration*1000)
    }

    useEffect( () => {
        waitAnimation();
    }, [animation])

    if (animation === undefined) {
        return (
            <div>
                {children}
            </div>
        )
    }

    return (
        <animation.style>
            {children}
        </animation.style>
    )
}

const OpenCloseAnimation = ( { OpenAnimation, CloseAnimation, closing, openCallback, closeCallback, children } ) => {

    return (
        <AnimationDiv animation={closing ? CloseAnimation : OpenAnimation} children={children} callback={closing ? closeCallback : openCallback}>
            {children}
        </AnimationDiv>
    )
}

export default Animation
export { OpenCloseAnimation, AnimationDiv }