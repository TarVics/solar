import React from 'react';

import fiveSteps from "../../../assets/img/five-steps.jpg";

const StepsSection = ({data}) => {
    const {steps: {title, items}} = data;
    return (
        <section id="five-steps">
            <article>
                <div className="left">
                    <header>{title}</header>
                    {items.map((item, index) => {
                        return (
                            <div>
                                <h5>0{index+1}</h5>
                                <h4>{item.caption}</h4>
                                <p>{item.info}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="right">
                    <img src={fiveSteps} alt={title}/>
                </div>
            </article>
        </section>
    );
};

export {StepsSection}