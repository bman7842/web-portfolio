import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SiteMeta from "./metaData"

const NavButton = (props) => {
    const selected = props.selected;
    const label = props.label;
    const linkTo = props.to;

    return (
        <Link to={linkTo}>
            <div class={"text-sm sm:text-base font-mono font-semibold py-1 px-2 border-cyan-800 " + (selected===label ? "border-b-4 text-cyan-700" 
            : "group-hover:text-cyan-700 group-hover:border-dotted group-hover:border-b-4 hover:border-dotted hover:border-b-4 text-gray-500 hover:text-cyan-700 transition duration-300")}>
                {props.children}
            </div>
        </Link>
    )
}

const DropDownNavButton = (props) => {
    const selected = props.selected;
    const label = props.label;
    const linkTo = props.to;
    const text = props.text;

    return (
        <div class="relative group">
            <NavButton selected={selected} label={label} to={linkTo}>
                {text}
            </NavButton>
            <div class="absolute left-0 right-0 hidden justify-center overflow-visible z-10 group-hover:flex">
                <div>
                    <div class="w-32 rounded px-2 py-2 bg-gray-200 shadow-lg border border-cyan-800">
                        <ul class="grid place-items-center grid-cols-1 divide-y divide-dashed">
                            {props.children}
                        </ul>
                    </div>
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
        <div class="w-full rounded transition duration-300 hover:bg-gray-400 text-center last:border-b-0 border-slate-400">
            <Link to={linkTo}><div class={"hover:text-white "+(subcat===label ? "text-cyan-800" : "")}>{props.children}</div></Link>
        </div>
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
                    <DropDownNavSubButton to="" label="doogle" selected={selected} subcat={subcat}>doogle</DropDownNavSubButton>
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
            <SiteMeta rel={selected}></SiteMeta>
            <div class="w-full grid place-items-center">
                <StaticImage href="index.html" class="w-full max-w-xs" src="../images/logo.png" />
            </div>

            <NavBar selected={selected} subcat={subcat}></NavBar>

        </header>
    )
}

export default MainHeader