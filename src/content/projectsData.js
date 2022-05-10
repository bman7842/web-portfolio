import MemorizerSC from "../images/memorizer_sc.png"
import DoogleSC from "../images/doogle_sample.png"

export const projectInfo = [
    [
        {
            title: "Doogle",
            img: DoogleSC,
            body: "A search engine designed to only show results relating to dogs - and a random activity. Presumably if you are googling around for dog photos I assume you're fairly bored so that’s where the activity suggestion comes into play.\nBuilt with React for the frontend, then a custom backend written with KoaJS. This was a project for an internship at PeachPay!",
            type: "default",
            button: {
                label: "try out",
                link: "http://doogle-env.eba-ugdmui76.us-east-2.elasticbeanstalk.com/?fbclid=IwAR3i-uJEDm83RSc1RC_30G6tobT-RSIVlVBh7Ta4lQXopzNVcP1h33k-ywE"
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
    ]
]