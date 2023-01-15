import React from 'react';

import ourClients from "../../../assets/img/our-clients.jpg";
import {LinkButton} from "../..";

const ClientsSection = ({data}) => {
    const {clients, links: {consult}} = data;
    return (
        <section id="clients">
            <header>{clients.title}</header>
            <article>
                <div className="left">
                    <img src={ourClients} alt={clients.title}/>
                </div>
                <div className="right">
                    <div>
                        <header>{clients.caption}</header>
                        <ul>
                            {clients.items.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <LinkButton href={consult.url} caption={consult.caption}/>
                    </div>
                </div>
            </article>
        </section>
    );
};

export {ClientsSection}