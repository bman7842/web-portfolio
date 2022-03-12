import * as React from "react"
import BriefImgArticle from "../components/imgArticle"

function IndexContent(props) {
    const articles = props.data;
    var maxRowLength = null;

    for (rowData in articles) {
        if (maxRowLength == null || rowData.length > maxRowLength) {
            maxRowLength = rowData.length;
        }
    }

    return (
        <content class={`px-4 mt-8 w-full grid md:grid-cols-${maxRowLength} gap-y-8 gap-x-4 place-items-center`}>
            {articles.map((row, key) => {
                if (skip == true) {
                    skip = false;
                } else {
                    if (key % 2 == 0 || data.length-1 == key) {
                        return (
                            <div class="md:col-start-2 md:col-span-4 w-full">
                                <BriefImgArticle title={data.title} image={data.image} body={data.body}/>
                            </div>
                        );
                    } else {
                        //skip = true;
                        const nextData = articles[key+1];
                        return (
                            <div class="md:col-span-3 grid grid-cols-3 w-full">
                                <BriefImgArticle title={data.title} image={data.image} body={data.body}/>
                            </div>

                        );
                    }
                }
            })}
            
            <div class="md:col-start-2 md:col-span-4 w-full">
                
                <BriefImgArticle title={name} image={image} body={body}/>
            </div>
        </content>
    )
}

export default IndexContent;