import React, { useState } from 'react';
import './table-search-component.css'

const TableSearchComponent = () => {
    const [value,setValue] = useState("")
    const handleChange =(e)=>{
        setValue(e.target.value)
        console.log(value)
    }
    const clear=()=>{
        setValue("")
    }
    return (
        // <div className="form-group table-search-comp">
        <div className="table-search-comp has-feedback" >
            <input type="text" value={value}  onChange={handleChange}style={{paddingTop:"20px", paddingBottom:"20px"}} class="form-control" id="inputValidation" placeholder="Search File Name"/>
            <div className="glyphicon glyphicon-search form-control-feedback" style={{borderLeft:"1.5px solid rgba(87, 79, 79, 0.19)", marginTop:"5px", cursor:"pointer"}}></div>
            <div className="glyphicon glyphicon-remove form-control-feedback "  onClick={clear} style={{marginRight:"35px", marginTop:"5px",cursor:"pointer"}}></div>
        </div>
    // </div>
    );
};

export default TableSearchComponent;