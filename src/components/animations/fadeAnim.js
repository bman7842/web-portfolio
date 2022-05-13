import styled from "styled-components"
import Animation from "./animation";

const fadeInDur = 1;
const FadeIn = new Animation(fadeInDur, styled.div`
    animation-duration: ${fadeInDur}s;
    animation-name: fadein;
    opacity: 1;
    transform: scale(1);

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`)

const fadeOutDur = 1;
const FadeOut = new Animation(fadeOutDur, styled.div`
    animation-duration: ${fadeOutDur}s;
    animation-name: fadeout;
    opacity: 0;
    transform: scale(0);

    @keyframes fadeout {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`)

export { FadeIn, FadeOut }