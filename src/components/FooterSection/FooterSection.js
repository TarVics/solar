import React from 'react';

import {BottomFooter, Contacts, LeaveOrder} from ".";

const FooterSection = ({data}) => {
    return (
        <section id="footer">
            <div className="wrap">
                <article>
                    <div className="left">
                        <LeaveOrder data={data}/>
                    </div>
                    <div className="right">
                        <Contacts data={data}/>
                    </div>
                </article>
                <BottomFooter data={data}/>
            </div>
        </section>
    );
};

export {
    FooterSection
}