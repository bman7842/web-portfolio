import * as React from "react"
import BriefImgArticle from "./components/imgArticle"

function IndexContent(props) {
    const data = props.data;

    const name = "test";
    const body = data[0]["body"];

    return (
        <content class="grid md:grid-cols-6 gap-y-8 gap-x-4 place-items-center">
            <BriefImgArticle name={name} body={body}/>
        </content>
    )
}

export default IndexContent;