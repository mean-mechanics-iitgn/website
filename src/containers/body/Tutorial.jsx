import React, {useEffect} from "react";
import TutorialsData from "../../data/TutorialsData";

export const Tutorial = () => {
    useEffect(() => {
        document.querySelector("nav").setAttribute("class", "nav-2");
    }, [])
    return (
        <>
            <section className="main-body tutorial">
                <div className="body-heading">
                    <h1>Tutorials</h1>
                </div>
                <TutorialsData/>

            </section>
        </>
    )
}
