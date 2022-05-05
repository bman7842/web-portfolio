import * as React from "react"
import Summary from "./summary"

/**
 * The maximum # of summary components to be rendered in a SummaryGridRow
 * @see SummaryGridRow
 */
const maxRowLen = 3;

/**
 * A component for rendering a single row of summary data. Each row can only
 * contain a maximum of 3 summaries.
 * @param {*} data A list containing objects following the Summary object data structure
 */
function SummaryGridRow({ data }) {
    return (
        <div class="w-full lg:flex lg:space-x-4 lg:mt-4 px-4">
            {data.map((summary, key) => {
                if (key<maxRowLen) {
                    return(
                        <div class={ ((data.length===1) ? "lg:w-2/3 w-full" : "lg:flex-1")+" lg:mt-0 mt-8 md:w-3/4 mx-auto"} >
                            <Summary data={summary}/>
                        </div>
                    );
                }
            })}
        </div>
    )
}

/**
 * A component for rendering several rows of summary data.
 * @param {*} data List containing lists, each list within data is a "row" of the grid. 
 */
function SummaryGrid({ data }) {
    return (
        <content class="w-full">
            {data.map((row) => {
                return(
                    <SummaryGridRow data={row}/>
                )
            })}
        </content>
    );
}

export { SummaryGrid, SummaryGridRow };