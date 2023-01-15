import React from 'react';

import {Logo, Social} from "../..";

const BottomFooter = ({data}) => {
    const {links: {policy}} = data;
    return (
        <div id="bottom-footer">
            <a href={policy.url}><h5>{policy.caption}</h5></a>
            <Logo/>
            <Social data={data}/>
        </div>
    );
};

export {BottomFooter}