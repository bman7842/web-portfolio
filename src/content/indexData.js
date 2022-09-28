import ProfileIMG from "../images/profile.jpg"
import UIowaIMG from "../images/uiowa.jpg"
import SCNLabIMG from "../images/scnlab.png"
import CollinsIMG from "../images/collinsaero.png"
import PeachPayIMG from "../images/peachpay-logo-gradient.png"

export const Summaries = [
    [
        {
            title: "Hi, I'm Brandon...",
            img: ProfileIMG,
            body: "I'm a passionate full stack web developer looking to constantly grow my expertise in machine learning, data analytics, and whatever new web technology pops up tomorrow! Currently a full-time student at the University of Iowa!",
            button: {
                label: "portfolio",
                link: "/portfolio"
            }
        }
    ],
    [
        {
            title: "University of Iowa",
            img: UIowaIMG,
            body: "Pursuing a bachelors degree. Excellent academic standing - 3.95 GPA. Consistently on deans and presidents list. Certified tutor for the Department of Computer Science. Involved in EPX Game Studio, and UIowa Hyperloop",
            experience: {
                date: "8/2019 - current",
                subtitle: "Computer Science and Engineering",
            }
        },
        {
            title: "PeachPay",
            img: PeachPayIMG,
            body: "Helped in building the leading WooCommerce one-click-checkout plugin. Improved API testing procedures to ensure better code coverage and stability. Worked on many new features such as Amazon Pay integration. Collaborated with many clients to address pain points for customers and merchants.",
            experience: {
                date: "5/2022 - current",
                subtitle: "Software Engineer",
            }
        }
    ],
    [
        {
            title: "Kliemann Laboratories",
            img: SCNLabIMG,
            body: "Built backend data processing pipelines for de-noising and filtering MRI scans. Created SimplePsycho, a Python package meant to simplify interfacing with the PsychoPy package greatly reducing complexity in developing visual stimulus for subjects. Worked exstenively with Python data analysis packages.",
            experience: {
                date: "5/2021 - 7/2022",
                subtitle: "Scientific Programmer",
            }
        },
        {
            title: "Collins Aerospace",
            img: CollinsIMG,
            body: "Led team in designing and prototyping a solution to hardware fault in airbus a220 avionics. Wrote data collection tools to simulate hardware behavior reducing time spent in lab. Created automated testing software which replaced a previously manual process allowing automatic tests to be written in CSV.",
            experience: {
                date: "1/2022 - 5/2022",
                subtitle: "Software Engineer",
            }
        }
    ]
]