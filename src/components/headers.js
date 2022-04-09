import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const NavButton = (props) => {
    const selected = props.selected;
    const label = props.label;
    const linkTo = props.to;

    return (
        <button class={"py-2 px-2 font-semibold " + (selected===label ? "border-b-4 border-cyan-800 text-cyan-700" : "text-gray-500 hover:text-cyan-700 transition duration-300")}>
            <Link to={linkTo}>{props.children}</Link>
        </button>
    )
}

const DropDownNavButton = (props) => {
    const selected = props.selected;
    const label = props.label;
    const linkTo = props.to;
    const text = props.text;

    return (
        <div class="relative group">
            <button class={"w-full px-2 py-2 mt-2 md:w-auto md:inline mt-0 font-semibold "+ (selected===label ? "border-b-4 border-cyan-800 text-cyan-700" : "text-gray-500 hover:text-cyan-700 transition duration-300")}>
                <Link class="w-full h-full" to={linkTo}>{text}</Link>
            </button>
            <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
            
                <div class="w-32 rounded p-2 pb-2 bg-white bg-gray-200 shadow-lg">
                <ul class="grid place-items-center grid-cols-1 gap-2">
                    {props.children}
                </ul>
                </div>
            </div>
        </div>
    )
}

const DropDownNavSubButton = (props) => {
    const label = props.label;
    const subcat = props.subcat;
    const linkTo = props.to;

    return (
        <button class={(subcat===label ? "text-cyan-700" : "hover:text-cyan-700 transition duration-300")}><Link to={linkTo}>{props.children}</Link></button>
    )
}

const NavBar = (props) => {
    const selected = props.selected;
    const subcat = props.subcat;

    return (
        <div class="w-full grid place-items-center">
            <nav class="flex items-center space-x-2">
                <NavButton to="/" label="home" selected={selected}>Home</NavButton>
                <DropDownNavButton to="/projects/" label="projects" selected={selected} text="Projects">
                    <DropDownNavSubButton to="/projects/" label="timeclock" selected={selected} subcat={subcat}>timeclock</DropDownNavSubButton>
                    <DropDownNavSubButton to="/projects/memorizer/" label="memorizer" selected={selected} subcat={subcat}>memorizer</DropDownNavSubButton>
                </DropDownNavButton>
                <NavButton to="/portfolio/" label="portfolio" selected={selected}>Portfolio</NavButton>
                <NavButton to="/contact/" label="contact" selected={selected}>Contact</NavButton>

            </nav>
        </div>
    )
}

const MainHeader = (props) => {
    const selected = props.selected;
    const subcat = props.subcat;

    return (
        <header class="w-full">
            <div class="w-full grid place-items-center">
                <StaticImage href="index.html" class="w-96" src="../images/logo.png" />
            </div>

            <NavBar selected={selected} subcat={subcat}></NavBar>

        </header>
    )
}

export default MainHeader