import MemorizerSC from "../images/memorizer_sc.png"
import DoogleSC from "../images/doogle_sample.png"
import HerkyImg from "../images/herky.jpg"
import StickyNoteImg from "../images/sticky_note.png"
import TempboxCollage from "../images/tempbox_collage.png"

export const projectInfo = [
    [
        {
            title: "Doogle",
            img: DoogleSC,
            body: "A search engine designed to only show results relating to dogs - and a random activity (since you're probably bored if you're looking up dog photos). Built with a React frontend and KoaJS backend. This was a project for an internship at PeachPay! Hosting with AWS",
            type: "default",
            button: {
                label: "view source",
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
            title: "IOT Temperature Probe",
            img: TempboxCollage,
            body: "Wireless temperature probe interface built with the ESP32. Provides a flutter based monitoring application to view temperature data remotely. Includes Twilio text alerts.",
            button: {
                label: "view source",
                link: "https://github.com/brandonegg/tempProbe"
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
