import MemorizerSC from "../images/memorizer_sc.png"
import DoogleSC from "../images/doogle_sample.png"
import HerkyImg from "../images/herky.jpg"
import StickyNoteImg from "../images/sticky_note.png"

export const projectInfo = [
    [
        {
            title: "Doogle",
            img: DoogleSC,
            body: "A search engine designed to only show results relating to dogs - and a random activity (since you're probably bored if you're looking up dog photos). Built with a React frontend and KoaJS backend. This was a project for an internship at PeachPay! Hosting with AWS",
            type: "default",
            button: {
                label: "try out",
                link: "https://github.com/brandonegg/doogle"
            }
        }
    ],
    [
        {
            title: "The Memorizer",
            img: MemorizerSC,
            body: "A simple memorization game where colored tiles light up in patterns you must remember. Patterns get increasingly complex and fast as you progress.",
            button: {
                label: "try out",
                link: "/projects/memorizer/"
            }
        }
    ],
    [
        {
            title: "HerkyMap",
            img: HerkyImg,
            body: "*IN PROGRESS* An interactive site built with NextJS for viewing and updating information regarding the various Herky statues around the area. Hosted with Vercel!",
            button: {
                label: "try out",
                link: "https://www.herkymap.com/"
            }
        },
        {
            title: "StickyBoard",
            img: StickyNoteImg,
            body: "*IN PROGRESS* A site designed to provide the 'whiteboarding' meeting experience to the web!",
        }
    ]
]
