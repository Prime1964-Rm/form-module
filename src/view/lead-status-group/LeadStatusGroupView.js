import React from "react";
import { Row, Col, DropdownButton, MenuItem } from "react-bootstrap";

import CustTable from "../../components/cust-table/CustTable";
import TableSearchComponent from "../../components/table-option-search/TableSearchComponent";
import { tableData } from "../../data";
import "./lead-status-group.css";
import download from '../../assets/arrow-alt-to-bottom.png'
import addList from '../../assets/bulk_upload.png'

const LeadStatusGroupView = ({setShow}) => {
  return (
    <div className="cust-table-container">
      <div
        className="cust-table-options"
        style={{ display: "flex", alignItems: "center" }}
      >
       
        <img
          style={{ marginLeft: "auto", marginRight: "50px", width:"18px" }}
          className="download pointer"
          src={download}
        />
        <div style={{ marginRight: "50px" }} onClick={()=>{
            document.getElementById('addListItem').click()
        }}
        className="pointer"
        >
        <img src={addList} style={{width:"32px"}} />
        <DropdownButton id="addListItem" pullRight style={{
            background:"transparent",
            border:"none",
            boxShadow:"none",
            padding:"5px"
        }}>
            <li className="menu-item" onClick={()=>{setShow(true)}}>Single add</li>
            <li className="menu-item">Bulk add</li>
          
        </DropdownButton>
     
        </div>

        <TableSearchComponent />
      </div>

      <CustTable tableData={tableData} />
    </div>
  );
};

export default LeadStatusGroupView;
