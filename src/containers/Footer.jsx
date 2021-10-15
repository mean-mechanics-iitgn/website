import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
                            <a href="/"><FacebookIcon fontSize="large"/></a>
                            <a href="/"><InstagramIcon fontSize="large"/></a>
                            <a href="/"><LinkedInIcon fontSize="large"/></a>
                            <a href="/"><YouTubeIcon fontSize="large"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}