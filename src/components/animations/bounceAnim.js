import styled from "styled-components"
import Animation from "./animation"

const bounceDownDur = 2;
const BounceDown = new Animation(bounceDownDur, styled.div`
    animation-duration: ${bounceDownDur}s;
    animation-name: bouncedown;
    animation-iteration-count: 1;

    @keyframes bouncedown {
        0% {
            transform: translateY(-30rem);
        }
        60% {
            transform: translateY(2rem);
        }
        100% {
            transform: translateY(0rem);
        }
    }
`)

const bounceUpDur = 1;
const BounceUp = new Animation(bounceUpDur, styled.div`
    animation-duration: ${bounceUpDur}s;
    animation-name: bounceup;
    animation-iteration-count: 1;


    @keyframes bounceup {
        0% {
            transform: translateY(0rem);
        }
        60% {
            transform: translateY(2rem);
        }
        100% {
            transform: translateY(-30rem);
        }
    }
`)

export { BounceDown, BounceUp }