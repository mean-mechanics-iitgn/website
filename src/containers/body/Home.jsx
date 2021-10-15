import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


import "../../style/home.css"

export const Home = () => {

    let home = document.getElementById("home")
    let windowPosition = window.scrollY > 300;
    if (windowPosition) {
        document.querySelector("nav").setAttribute("class", "nav-2");
    }
    else if (!windowPosition && home != null) {
        document.querySelector("nav").setAttribute("class", "nav-1");
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let home = document.getElementById("home")
            let windowPosition = window.scrollY > 300;
            // console.log(windowPosition)
            if (windowPosition) {
                document.querySelector("nav").setAttribute("class", "nav-2");
                // console.log("nav 2")
            }
            else if (!windowPosition && home != null) {
                document.querySelector("nav").setAttribute("class", "nav-1");
                // console.log("nav 1")
            }
        })
    }, [])
    return (
        <>
            <section id="home" className="">
                <div className="home-image">
                    <div className="p-4  grid justify-items-center  backdrop-blur bg-light-601 bg-opacity-10 rounded-xl">
                        <img className="home-logo home-image-items" src={process.env.PUBLIC_URL + "/mean-mech-logoONLY.png"} alt="Mean Mechanics Logo" />
                        <h1 className="home-image-items font-bold text-light-101">Mean Mechanics</h1>
                        <h3 className="home-image-items text-light-101">Robotics Club of IIT Gandhinagar</h3>
                    </div>
                    <a className="text-light-101 hover:text-light-101" href="#main"><KeyboardArrowDownRoundedIcon fontSize="large" /></a>
                </div>
                <section className="py-24 px-4 lg:mx-20" id="main">


                    <h2> About us</h2>
                    <div className="grid sm:grid-cols-2 mb-8 md:gap-14 gap-10">
                        <div className="text-justify ">
                            Mean Mechanics | Robotics Club of IIT Gandhinagar. Keeping up the spirit of Robotics at IITGN, ‘Mean Mechanics’ is one of the most active clubs. It has been very crucial in inspiring and motivating students towards the field of robotics and thinking innovatively. It provides students a hands on experience and is the right platform to get the students tinkering! The club conducts workshops and competitions for the student community in various phases.
                        </div>
                        <img className="max-h-80 justify-self-center" src={process.env.PUBLIC_URL + "/images/home-about.jpg"} alt="About" />
                    </div>

                    <hr />

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-center md:gap-14 gap-10">
                        <div className="grid justify-center">
                            <h2>Upcoming Events</h2>
                            <img className="w-9/12 justify-self-center" src={process.env.PUBLIC_URL + "/images/upcoming-events.png"} alt="Mean Mechanics Logo" />
                            <a className="no-underline text-dark-401 font-bold text-xl justify-self-center mt-2" href="/Rulebook for TinkerWiZ.pdf" target="blank">Click to know more</a>
                        </div>
                        <div className="grid justify-center">
                            <h2> Projects Compilation</h2>
                            {/* <div className=""> */}
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/jTOq5-_VpY8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            {/* </div> */}
                        </div>
                    </div>

                    {/* </div> */}
                </section>
            </section>
        </>
    )
}