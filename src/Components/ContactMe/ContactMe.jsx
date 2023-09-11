import React from "react";
import './ContactMe.css'

function ContactMe() {
    // - Nombre
    // - Direccion
    // - Enlace Git
    // - LinkedIn
    // - Yahoo
    return(
        <>
            <div className="contact-info-card">
                <div className="card">
                    <div className="card-header"> Contact me</div>
                    <div className="card-body">
                        <ul>
                            <p>
                                <li><strong><span className="card-body-font"> Name: </span> </strong>Ana María Madico </li>
                            </p>
                            <p>
                                <li><strong><span className="card-body-font"> Address: </span></strong> c/ Los Alamos</li>
                            </p>
                            <p>
                                <li><strong><span className="card-body-font"> GitHub: </span></strong> https://github.com/anamariamad</li>
                            </p>
                            <p>
                                <li><strong><span className="card-body-font"> LinkedIn: </span></strong>https://www.linkedin.com/in/ana-maria-madico/ </li>
                            </p>
                            <p>
                                <li><strong><span className="card-body-font"> descarga CV: </span></strong> <a href="https://www.canva.com/design/DAFtOcmgNaU/6S7ReAfxtUtGeX8snRVAiA/view?utm_content=DAFtOcmgNaU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"> CV </a></li>
                            </p>
                            <p>
                                <li><strong><span className="card-body-font">Email: </span> </strong>pendrivemorado@yahoo.es </li>
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ContactMe;