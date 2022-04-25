import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MainFooter = () => {
    return(
        <footer class="p-2">
            <div class="flex items-center justify-between">
                <div class="p-4 inline-flex items-baseline text-gray-500 text-xs">
                    <span>Designed by Brandon, built in Iowa City 📍</span>
                </div>

                <div class="flex items-center mx-8 space-x-2">
                    <div class="inline-flex w-6">
                        <a href="https://twitter.com/bman_tm" target="_blank" rel="noopener noreferrer">
                        <StaticImage src="../images/twitter_logo.svg" class=""/>
                        </a>
                    </div>
                    <div class="inline-flex w-6 mx-4">
                        <a href="https://github.com/bmanTM" target="_blank" rel="noopener noreferrer">
                        <StaticImage src="../images/github_logo.svg" class=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
