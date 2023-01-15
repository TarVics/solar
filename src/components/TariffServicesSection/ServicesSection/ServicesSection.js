import React from 'react';

import services from "../../../assets/img/services.jpg";

const ServicesSection = ({data}) => {
    const {services: {title, items}} = data;
    return (
        <section id="services">
            <header>{title}</header>
            <article>
                <div className="left">
                    {
                        items.map((item, index) => {
                            return (
                                <div className="info" key={index}>
                                    <h4>{item.caption}</h4>
                                    <p>{item.info}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="right">
                    <img src={services} alt="services"/>
                </div>
            </article>
        </section>
    );
};

export {ServicesSection}