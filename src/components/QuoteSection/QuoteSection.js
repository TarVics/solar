import React from 'react';

const QuoteSection = ({data: {quote}}) => {
    return (
        <section id="quote">
            <div className="wrap">
                <h2>{quote.title}</h2>
            </div>
        </section>
    );
};

export {QuoteSection}