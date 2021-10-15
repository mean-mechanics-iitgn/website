import React from "react";
// import { useRouteMatch } from "react-router-dom";
// import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';


export const ProjectBody = (props) => {
    console.log(props.data)
    return (
        <>
            {
                props.data.map((val, ind) => {
                    return <OneProject
                        key={ind}
                        id={val.id}
                        title={val.title}
                        img_src={val.image[0].formats.small.url}
                        alt={val.alt}
                        desc={val.desc}
                        link={val.link}
                        link_title={val.link_title}
                    />
                })
            }
        </>
    )
}


const OneProject = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-10">
                <div className="text-justify col-span-2">
                    {props.desc}
                    <div className="mt-2">
                        <h4>Important links</h4>
                        <ul>
                            <li> <a className="no-underline text-dark-401" href="/"><LinkIcon/> Github</a></li>
                            <li> <a className="no-underline text-dark-401" href="/"><LinkIcon/> Youtube</a></li>
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