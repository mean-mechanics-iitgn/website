import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../style/footer.css";

export const Footer = () => {
    return (
        <>
            <footer className="nav-uncheck">
                {/* <div> */}
                <div className="footer-cardBody pb-10 flex flex-col md:flex-row justify-around items-center">
                    <div className="footer-card">
                        <div className="footer-headings"><LocationOnIcon /></div>
                        <div className="footer-cardContent">IIT Gandhinagar, Gujarat - 382355</div>
                    </div>
                    <div className="footer-card">
                        <div className="footer-headings">Contact Us</div>
                        <div className="footer-cardContent">meanmechanics@iitgn.ac.in</div>
                    </div>
                    <div className="footer-card">
                        <div className="footer-headings">Follow us on</div>
                        <div className="footer-cardContent">
                            <a href="https://www.facebook.com/meanmechanicsiitgn/" target="blank"><FacebookIcon fontSize="large"/></a>
                            <a href="https://www.instagram.com/mean.mechanics/" target="blank"><InstagramIcon fontSize="large"/></a>
                            <a href="https://www.linkedin.com/company/meanmech/" target="blank"><LinkedInIcon fontSize="large"/></a>
                            <a href="https://www.youtube.com/channel/UCSpWlSFKoJ2-PQKvi-0Ip3A" target="blank"><YouTubeIcon fontSize="large"/></a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-center text-xs md:text-sm pb-4">
                    <div>
                        Copyright <CopyrightIcon fontSize="small" /> Mean Mechanics, IIT Gandhinagar
                    </div>
                    <div>
                        Developed by <a className="no-underline text-light-101 hover:text-light-701" href="https://github.com/mukul-raj" target="blank">Mukul Raj</a>
                    </div>
                </div>
            </footer>
        </>
    )
}