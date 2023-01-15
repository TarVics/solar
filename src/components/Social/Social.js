import React from 'react';

import imgInstagram from "../../assets/img/instagram.png";
import imgTelegram from "../../assets/img/telegram.png";
import imgWatsApp from "../../assets/img/watsapp.png";
import imgFacebook from "../../assets/img/facebook.png";

const Social = ({data: {links}}) => {
    const {instagram, telegram, watsApp, facebook} = links;
    return (
        <div className="social">
            <a href={instagram.url}>
                <img src={imgInstagram} alt={instagram.caption}/>
            </a>
            <a href={telegram.url}>
                <img src={imgTelegram} alt={telegram.caption}/>
            </a>
            <a href={watsApp.url}>
                <img src={imgWatsApp} alt={watsApp.caption}/>
            </a>
            <a href={facebook.url}>
                <img src={imgFacebook} alt={facebook.caption}/>
            </a>
        </div>
    );
};

export {Social}