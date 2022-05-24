import React from 'react';
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsScroll from "../components/ButtonsScroll";
import Logo from "../components/Logo";
import Formulaire from "../components/Formulaire";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {

    let stateNumber = {
        value: "06 12 23 23 23",
        copied: false
    }
    let stateEmail = {
        value: "bonjour@gmail.com",
        copied: false
    }

    return (
        <div>
            <Mouse/>
            <div className="contact">
                <Navigation/>
                < Logo/>
                < Formulaire/>
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p> 12 rue de Nulpart </p>
                            <p> 56300 Pasloin </p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text={stateNumber.value} className="hover">
                                <p style={{cursor: "pointer"}}
                                   className='clipboard'
                                   onClick={() => {
                                       alert('Vous avez copié le numéro : ' + stateNumber.value)
                                   }}> 06 12 23 23 23  </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text={stateEmail.value} className="hover">
                                <p style={{cursor: "pointer"}}
                                   className='clipboard'
                                   onClick={() => {
                                       alert("Vous avez copié l'email : " +stateEmail.value)
                                   }}> bonjour@gmail.com </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                     <div className='credits'>
                         <p> ST - 2022 </p>
                     </div>
                </div>
            </div>
            < ButtonsScroll left={'/project-4'}/>
        </div>
    );
};

export default Contact;