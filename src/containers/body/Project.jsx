import React, { useEffect } from "react";
import ProjectsData from "../../data/ProjectsData";


export const Project = () => {
    useEffect(() => {
        document.querySelector("nav").setAttribute("class", "nav-2");
    }, [])
    return (
        <>
            <section className="main-body pt-9">
                <div className="body-heading">
                    <h1>Projects</h1>
                </div>
                        <ProjectsData />
            </section>
        </>
    )
}