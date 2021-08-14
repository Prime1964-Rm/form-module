import React from 'react';
import './cust-input.css'

const Cust_Input = ({id, label,placeholder,value, mandatory}) => {
    return (
        <div className="cust-input">
            <label className={`cust-input-label ${mandatory}`} for={id}>{label}</label>
            <input value={value} placeholder={placeholder} type="text" id={id}/>
        </div>
    );
};

export default Cust_Input;