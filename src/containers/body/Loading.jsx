import React, { useEffect } from "react";
import "../../style/loading.css"


export const Loading = () => {


    // Metis animation
    useEffect(() => {
        const text = document.getElementById("loading")
        const splitText = text.textContent.split("");

        let animation = () => {
            text.textContent = "";
            for (let i = 0; i < splitText.length; i++) {
                text.innerHTML += "<span>" + splitText[i] + "</span>"
            }

            let char = 0;

            let timer = setInterval(() => {
                const span = text.querySelectorAll('span')[char];
                span.classList.add('animation');
                char++;
                if (char === splitText.length) {
                    complete();
                    return;
                }
            }, 20);

            function complete() {
                clearInterval(timer);
                timer = null;
            }
        }
        animation();
    }, [])


    return (
        <>
            <div className="body-container">
                <div className="loading" id="loading">
                    {/* <img className="home-image-arrow" src="/images/loading.gif" alt="Loading..." /> */}
                    Loading...
                </div>
            </div>

        </>
    )
}