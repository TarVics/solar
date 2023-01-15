import React from 'react';

import {Social, LinkButton, Logo} from "..";

const TitleSection = ({data}) => {
    const {title, links: {consult}} = data;
    return (
        <section id="title">
            <div className="wrap">
                <Logo/>
                <div className="title-headings">
                    <h4>{title.info}</h4>
                    <h1>{title.subject}</h1>
                    <h2>{title.revenue}</h2>
                    <LinkButton href={consult.url} caption={consult.caption}/>
                </div>
                <Social data={data}/>
            </div>
        </section>
    );
};

export {
    TitleSection
}