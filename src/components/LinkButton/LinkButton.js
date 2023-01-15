import React from 'react';

const LinkButton = ({href, caption, onClick}) => {
    return (
        <a className="button" href={href} onClick={onClick}>{caption}</a>
    );
};

export {LinkButton}