import React from 'react';

import {ClientsSection, StepsSection} from "..";

const ClientStepsSection = ({data}) => {
    return (
        <div className="wrap">
            <ClientsSection data={data}/>
            <StepsSection data={data}/>
        </div>
    );
};

export {ClientStepsSection}