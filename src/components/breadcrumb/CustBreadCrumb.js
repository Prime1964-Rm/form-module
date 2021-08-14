import React from 'react';
import { data } from '../../data';
import './cust-breadcrumb.css';

const CustBreadCrumb = ({data,onBackClick, length}) => {
    return (
        <div className="cust-breadcrumb">
            {
                data&&data.map((item,idx)=>{
                    return <h1 className={idx>0?"before":"normal"} key={idx}>{idx===0&&length===3?<i onClick={onBackClick} className="fas fa-arrow-left pointer" style={{marginRight:"10px"}}></i>:""} {item.title}</h1>
                })
            }
        </div>
    );
};

export default CustBreadCrumb;