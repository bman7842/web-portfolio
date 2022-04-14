import * as React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../images/favicon.png"

const TitleList = [
    `BEEMAN`,
    `Hi`,
    `Greetings!`,
    `Plz hire me`,
]

Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
}

const SiteMeta = () => {
    return(
        <div className="BEEMAN_APP">
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>{TitleList.random()}</title>
                <link rel="icon" href={Favicon}></link>
            </Helmet>
        </div>
    )
}

export default SiteMeta