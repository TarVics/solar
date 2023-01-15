import React from 'react';

import {ServicesSection, TariffsSection} from "..";

const TariffServicesSection = ({data}) => {
    return (
        <div className="wrap">
            <ServicesSection data={data}/>
            <TariffsSection data={data}/>
        </div>
    );
};

export {TariffServicesSection}