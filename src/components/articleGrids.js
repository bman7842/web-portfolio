import * as React from "react"
import { ImgArticle } from "./articles"

function GridRow(props) {
    const data = props.rowData;

    return (
        <div class="w-full lg:flex lg:space-x-4 lg:mt-4 px-4">
            {data.map((article, key) => {
                return(
                    <div class={ ((data.length===1) ? "lg:w-2/3 w-full" : "lg:flex-1")+" lg:mt-0 mt-8 md:w-3/4 mx-auto"} >
                        <ImgArticle title={article.title} image={article.image} body={article.body} type={article.type} button={article.button}/>
                    </div>
                );
            })}
        </div>
    )
}

function ArticleGrid(props) {
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

export { GridRow, ArticleGrid };