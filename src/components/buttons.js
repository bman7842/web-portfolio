import * as React from "react"
import { Link } from "gatsby"

/**
 * Takes button data object and renders into interactive button
 * @param {*} data button data
 */
export const SummaryButton = ( { data } ) => {
    const label = data.label;
    const hasAction = (data.action !== undefined);
/*
    const ActionItem = () => {
        if (hasAction) {
            return (
                <button className="px-2" onClick={data.action}/>
            )
        }

        const isRelLink = (data.link.charAt(0) === "/");
        console.log(isRelLink);
        if (isRelLink) {
            return(
                <Link to={data.link} className="w-full px-2">
                    <b className="py-1">{label}</b>
                </Link>
            )
        }

        return (
            <a className="w-full px-2" href={data.link}>
                <b>{label}</b>
            </a>
        )
    }

    return (
        <div class="border-2 border-gray-400 rounded-lg bg-sky-200 drop-shadow-md ease-in-out transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
            <ActionItem />
        </div>
    )*/

    const ActionItem = (props) => {
        if (hasAction) {
            return (
                <button onClick={data.action}>{props.children}</button>
            )
        }

        const isRelLink = (data.link.charAt(0) === "/");
        if (isRelLink) {
            return(
                <Link to={data.link}>
                    {props.children}
                </Link>
            )
        }

        return (
            <a href={data.link}>
                {props.children}
            </a>
        )
    }

    return (
        <ActionItem>
            <div class="border-2 border-gray-400 rounded-lg bg-sky-200 drop-shadow-md ease-in-out transition ease-in-out hover:scale-110 hover:bg-sky-300 hover:drop-shadow-md hover:border-gray-600 duration-100">
                <b className="py-1 px-2">{label}</b>
            </div>
        </ActionItem>
    )
}