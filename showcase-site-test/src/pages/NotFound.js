import React from 'react';
import {NavLink} from "react-router-dom";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";

const NotFound = () => {
    return (
        <div>
            <Mouse/>
            <div className="notFound">
                <div className="notFound-content">
                    <h2> Erreur 404 <br/>page non trouvé</h2>
                    <NavLink to='/'>
                        <h3>Retour à l'accueil <i className="fas fa-home"></i></h3>
                    </NavLink>

                </div>
            </div>

            <SocialNetwork />
        </div>
    );
};

export default NotFound;