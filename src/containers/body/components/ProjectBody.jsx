import React from "react";
// import { useRouteMatch } from "react-router-dom";
// import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';


export const ProjectBody = (props) => {
    return (
        <>
            {
                props.data.map((val, ind) => {
                    return <OneProject
                        key={ind}
                        id={val.id}
                        title={val.title}
                        img_src={val.image[0].formats.small.url}
                        desc={val.desc}
                        links={val.links}
                    />
                })
            }
        </>
    )
}


const OneProject = (props) => {
    const links = props.links.split("&&&")
    return (
        <>
            <h2>{props.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-10">
                <div className="text-justify col-span-2">
                    {props.desc}
                    <div className="mt-2">
                        <h4>Links</h4>
                        <ul>
                            {links.map((val, ind) => {
                                const link = val.split("--")
                                return (
                                    <li key={ind}> <a className="no-underline text-dark-401" href={link[1]}><LinkIcon /> {link[0]}</a></li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
                <div className="">
                    <img className="w-96" src={props.img_src} alt={"Robotics hand"} />
                </div>
            </div>
        </>
    )
}