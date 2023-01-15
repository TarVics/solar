import React from "react";

import {ClientStepsSection, FooterSection, QuoteSection, TariffServicesSection, TitleSection} from "./components";
import {data} from './data';

function App() {
    return (
        <>
            <TitleSection data={data}/>
            <TariffServicesSection data={data}/>
            <QuoteSection data={data}/>
            <ClientStepsSection data={data}/>
            <FooterSection data={data}/>
        </>
    );
}

export {App}
