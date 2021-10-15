import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../style/header.css';


const fetch = require("node-fetch");

const url = process.env.REACT_APP_SERVER + "/test";
const admin_link = process.env.REACT_APP_SERVER + "/admin/";

export const Header = () => {
    const [title, setTitle] = useState("Mean Mechanics");
    useEffect(() => {
        fetch(url)
            .then(Response => Response.json())
            .then(result => {
                if (result.title) {
                    setTitle(result.title)
                }
            })
    }, [])

    return (
        <>
            <header>
                <nav className="nav-1">
                    <div className="navbar-title">
                        <a className="title-meanMech" id="title-meanMech" href={admin_link} target="blank">{title}</a>
                    </div>
                    <input type="checkbox" id="check"></input>
                    <label htmlFor="check" className="cursor-pointer nav-checkbtn">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </label>
                    <div className="navbar-links nav-uncheck">
                        <ul>
                            <li><NavLink activeClassName="active-navlink" exact className={process.env.PUBLIC_URL + "active"} to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active-navlink" to={process.env.PUBLIC_URL + "/project"}>Project</NavLink></li>
                            <li><NavLink activeClassName="active-navlink" to={process.env.PUBLIC_URL + "/tutorial"}>Tutorials</NavLink></li>
                            {/* <li><NavLink activeClassName="active-navlink" to={process.env.PUBLIC_URL + "/leader_board"}>Leader Board</NavLink></li> */}
                            <li><NavLink activeClassName="active-navlink" to={process.env.PUBLIC_URL + "/team"}>Team</NavLink></li>
                            {/* <li><NavLink activeClassName="active-navlink" to={process.env.PUBLIC_URL+"/contact"}>Contact</NavLink></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}