import React from 'react';

const Contacts = ({data}) => {
    const {contacts: {title, items}} = data;
    return (
        <>
            <h3>{title}</h3>
            {
                items.map((item, index) => {
                    const res = [];

                    if (item.caption) {
                        res.push(<p key={'caption'}>{item.caption}</p>);
                    }

                    if (Array.isArray(item.contact)) {
                        item.contact.forEach((contact, index) => {
                            res.push(<p key={'contact-' + index}>{contact}</p>);
                        })
                    }

                    return (<div key={'item-' + index}>{res}</div>);
                })
            }
        </>
    );
};

export {Contacts};