import React from "react";
import { FaGithub, FaYahoo, FaLinkedin } from 'react-icons/fa'

import './Footer.css';

function Footer() {
    const email = 'pendrivemorado@yahoo.es'
    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="icons">
                        <a href="https://github.com/anamariamad" target="_blank" rel="noopener noreffer">
                            <FaGithub className="icon" />
                        </a>

                        <a href={`mailto:${email}`} target="_blank" rel="noopener noreffer">
                            <FaYahoo className="icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/ana-maria-madico/" target="_blank" rel="noopener noreffer">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;