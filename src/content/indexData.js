import ProfileIMG from "../images/profile.jpg"
import UIowaIMG from "../images/uiowa.jpg"
import SCNLabIMG from "../images/scnlab.png"
import CollinsIMG from "../images/collinsaero.png"

export const Summaries = [
    [
        {
            title: "Hi, I'm Brandon...",
            img: ProfileIMG,
            body: "",
        }
    ],
    [
        {
            title: "University of Iowa",
            img: UIowaIMG,
            body: "TODO",
            experience: {
                date: "8/2019 - current",
                subtitle: "Computer Science and Engineering",
            }
        },
        {
            title: "Kliemann Laboratories",
            img: SCNLabIMG,
            body: "Built backend data processing pipelines for de-noising and filtering MRI scans. Wrote tools for retrieving and sorting subject data later used to produce metrics and diagrams for research.",
            experience: {
                date: "5/2021 - 1/2022",
                subtitle: "Scientific Programmer",
            }
        }
    ],
    [
        {
            title: "Collins Aerospace",
            img: CollinsIMG,
            body: "Led team in designing and prototyping a solution to hardware fault in airbus a220 avionics. Created data collection tools to simulate hardware behavior reducing time spent in lab. Built new automated testing software which replaced a previously manual process and also allowed tests to be written in CSV, rather than hard coded.",
            experience: {
                date: "5/2021 - 1/2022",
                subtitle: "Software Engineer",
            }
        }
    ]
]