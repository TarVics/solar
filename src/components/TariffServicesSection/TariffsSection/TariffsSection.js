import React, {useState} from 'react';

import greenTariffLeft from "../../../assets/img/green-tariff-left.jpg";
import greenTariff from "../../../assets/img/green-tariff.jpg";

const TariffsSection = ({data}) => {
    const {tariffs: {title, links, info, tariffInfo, profits}} = data;
    const [activeLink, setActiveLink] = useState(links[0].key);

    const profitsOutput = [];
    for (let i = 0; i < profits.length; i += 2) {
        profitsOutput.push((
            <article key={i}>
                <div className="left">
                    <div>
                        <h4>{profits[i].caption}</h4>
                        <p>{profits[i].info}</p>
                    </div>
                </div>
                <div className="right">
                    <div><h4>{profits[i+1].caption}</h4>
                        <p>{profits[i+1].info}</p></div>
                </div>
            </article>
        ))
    }

    return (
        <section id="green-tariff">
            <header>{title}</header>
            <article>
                <div className="left">
                    <nav className="nav-links">
                        {links.map(link => {
                            return (
                                <a href={link.url}
                                   className={link.key === activeLink ? 'active' : ''}
                                   key={link.key}
                                   onClick={e => {setActiveLink(link.key); e.preventDefault();}}
                                >{link.caption}</a>
                            )
                        })}
                    </nav>
                    <p>{links.find(link => link.key === activeLink).info}</p>
                </div>
                <div className="right">
                    <h4>{info}</h4>
                </div>
            </article>
            <article>
                <div className="left">
                    <article>
                        <div className="left">
                            <img src={greenTariffLeft} alt={title + ' (left)'} />
                        </div>
                        <div className="right">
                            <p>{tariffInfo}</p>
                        </div>
                    </article>
                    {profitsOutput}
                </div>
                <div className="right">
                    <img src={greenTariff} alt={title + ' (right)'}/>
                </div>
            </article>
        </section>
    );
};

export {TariffsSection}