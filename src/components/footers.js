import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MainFooter = () => {
    return(
        <footer class="mt-12 p-2 border-t">
            <div class="flex items-center justify-between">
                <div class="p-4 inline-flex items-baseline text-gray-500 text-xs">
                    <span>Designed by Brandon, built in Iowa City</span>
                    <StaticImage src="../images/map-marker.svg" alt="" class="self-center w-3 mx-1 opacity-60" />
                </div>

                <div class="flex items-center mx-8 space-x-2">
                    <div class="inline-flex w-6">
                        <a href="https://twitter.com/bman_tm" target="_blank" rel="noopener noreferrer">
                        <StaticImage src="../images/twitter_logo.svg" class=""/>
                        </a>
                    </div>
                    <div class="inline-flex w-6 mx-4">
                        <a href="https://github.com/bman7842" target="_blank" rel="noopener noreferrer">
                        <StaticImage src="../images/github_logo.svg" class=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter