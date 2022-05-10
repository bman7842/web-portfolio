import MemorizerSC from "../images/memorizer_sc.png"
import DoogleSC from "../images/doogle_sample.png"

export const projectInfo = [
    [
        {
            title: "Doogle",
            img: DoogleSC,
            body: "A search engine designed to only show results relating to dogs - and a random activity (since you're probably bored if you're looking up dog photos). Built with a React frontend and KoaJS backend. This was a project for an internship at PeachPay! Hosting with AWS",
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
