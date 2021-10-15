import React, {useEffect} from "react";
import TeamsData from "../../data/TeamsData"
import "../../style/team.css"

export const Team = () => {
    useEffect(() => {
        document.querySelector("nav").setAttribute("class", "nav-2");
    }, [])
    return (
        <>
            <section className="main-body team">
                <div className="body-heading">
                    <h1>Our Team</h1>
                </div>
                <TeamsData/>
            </section>
        </>
    )
}