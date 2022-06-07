import React from "react"
import img from "../images/profilepic.png"
import {MailIcon, LinkedinIcon} from "./Icons"

export default function Contact() {
    return (
        <section className="contact">
            <img src={img} alt="me"/>
            <h1>Laura Smith</h1>
            <p className="text--role">Frontend Developer</p>
            <p>
                <a href="#" className="text--website">laurasmith.website</a>
            </p>

            <ul className="contact__links">
                <li className="contact__email">
                    <a href="#">
                        <MailIcon />
                        Email
                    </a>
                </li>
                <li className="contact__linkedin">
                    <a href="#">
                        <LinkedinIcon />
                        LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    )
}