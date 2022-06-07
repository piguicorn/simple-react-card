import React from "react"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import Social from "./components/Social"

export default function App() {
    return (
        <div className="app-container">           
            <Contact />
            <AboutMe />
            <Social />
        </div>
    )
}