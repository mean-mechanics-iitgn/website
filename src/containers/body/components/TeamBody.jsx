import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const TeamBody = (props) => {

    // sorting and arranging the data
    let sortData = [];
    let positionArray = [];
    props.data.map((val, ind) => {
        if (positionArray.indexOf(val.position) === -1) {
            sortData.push([val])
            positionArray.push(val.position)
        }
        else {
            let index = positionArray.indexOf(val.position)
            sortData[index].push(val)
        }
        return 0;
    })

    return (
        <>
            <section className="body-container">
                {
                    positionArray.map((val, ind) => {
                        return <TeamContainer
                            key={ind}
                            position={val}
                            positionArray={positionArray}
                            sortData={sortData}
                        />
                    })
                }
            </section>
        </>
    )
}

const TeamContainer = (props) => {
    return (<>
        <div className="team-container">
            <h2 className="team-heading font-medium">{props.position}</h2>
            {
                props.sortData[props.positionArray.indexOf(props.position)].map((val, ind) => {
                    // console.log(val.position)
                    return <TeamCard
                        key={ind}
                        name={val.name}
                        img_src={val.image[0].url}
                        alt={val.image[0].alternativeText}
                        email={val.email}
                        github={val.github}
                        linkedin={val.linkedin}
                    />
                })
            }
        </div>
    </>)
}

const TeamCard = (props) => {
    return (
        <>
            <div className="team">
                <div className="card">
                    <h5 className="card-title">{props.name}</h5>
                    <img src={props.img_src} className="card-img-top" alt="Hello" />
                    <div className="card-body">
                        {props.github ?
                            <a className="text-dark-301 hover:text-dark-801" href={props.github}>
                                <GitHubIcon fontSize="large"/>
                            </a>
                            :
                            <div></div>
                        }
                        {props.linkedin ?
                            <a className="text-dark-301 hover:text-dark-801" href={props.linkedin}>
                                <LinkedInIcon fontSize="large"/>
                            </a>
                            :
                            <div></div>
                        }
                        {props.email ?
                            <a className="text-dark-301 hover:text-dark-801" href={props.email} >
                                <EmailIcon fontSize="large"/>
                            </a>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

// GitHubIcon
// EmailIcon
// LinkedInIcon


// const Social = (props) => {
//     return (<>
//         <img src="https://img.icons8.com/ios-glyphs/48/000000/instagram-new.png" alt="logo"/>
//         <img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" alt="logo"/>
//         <img src="https://img.icons8.com/material-rounded/48/000000/facebook.png" alt="logo"/>
//         <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="logo"/>
//         <img src="https://img.icons8.com/fluency-systems-filled/48/000000/new-post.png" alt="logo"/>

//     </>
//     )
// }


