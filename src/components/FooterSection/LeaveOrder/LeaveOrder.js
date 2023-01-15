import React from 'react';

import {LinkButton} from "../..";

const LeaveOrder = ({data: {order,links}}) => {
    const {title, name, phone} = order;
    const {order: link} = links;
    const onClickOrder = e => {
        // console.log(e.target.parentElement);
        const form = e.target.parentElement;
        if (form.checkValidity()) form.submit();
        e.preventDefault();
    }
    return (
        <form>
            <h3>{title}</h3>
            <input type="text" placeholder={name} required/>
            <input type="text" placeholder={phone} required/>
            <LinkButton href={link.url} caption={link.caption} onClick={onClickOrder}/>
        </form>
    );
};

export {LeaveOrder}