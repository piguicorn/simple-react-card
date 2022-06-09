import React from "react"
import {TwitterIcon, 
        FacebookIcon,
        InstagramIcon,
        GithubIcon} from "./Icons"

export default function Social() {
    return (
        <section className="social">
            <ul>
                <li>
                    <a href="#">
                        <TwitterIcon title="Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FacebookIcon title="Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <InstagramIcon title="Instagram"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <GithubIcon title="Github"/>
                    </a>
                </li>                                
            </ul>
        </section>
    )
}