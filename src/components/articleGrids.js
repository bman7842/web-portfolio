import * as React from "react"
import { Summary } from "./summary"

function GridRow(props) {
    const data = props.rowData;

    return (
        <div class="w-full lg:flex lg:space-x-4 lg:mt-4 px-4">
            {data.map((article, key) => {
                return(
                    <div class={ ((data.length===1) ? "lg:w-2/3 w-full" : "lg:flex-1")+" lg:mt-0 mt-8 md:w-3/4 mx-auto"} >
                        <Summary article={article}/>
                    </div>
                );
            })}
        </div>
    )
}

function SummaryGrid(props) {
    const data = props.data;

    return (
        <content class="w-full">
            {data.map((row, key) => {
                return(
                    <GridRow rowData={row}/>
                )
            })}
        </content>
    );
}

export { GridRow, SummaryGrid };