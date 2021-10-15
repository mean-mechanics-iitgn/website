import React from "react";
import LinkIcon from '@mui/icons-material/Link';


export const TutorialBody = (props) => {
    console.log(props.data)

    return (
        <>
                {
                    props.data.map((val, ind) => {
                        return <OneTutorial
                            key={ind}
                            id={val.id}
                            title={val.Title}
                            img_src={val.Image[0].formats.small.url}
                            desc={val.desc}
                            links={val.links}
                        />
                    })
                }
        </>
    )
}


const OneTutorial = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-10">
                <div className="text-justify col-span-2">
                    {props.desc}
                    <div className="mt-2">
                        <h4>Important links</h4>
                        <ul>
                            <li> <a className="no-underline text-dark-401" href={props.links}><LinkIcon/> Workshop</a></li>
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