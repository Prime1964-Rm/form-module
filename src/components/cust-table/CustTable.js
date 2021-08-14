import React from "react";
import { Table } from "react-bootstrap";
import "./cust-table.css";

const CustTable = ({ tableData, actions, actionArray }) => {
  const generateThs = () => {
    let res = tableData
      .filter((data, idx) => idx < 1)
      .map((data) => {
        let values = Object.getOwnPropertyNames(data);
        return values.map((item) => {
          return <th className="opaqbg"
          style={{
            padding:"14px",
            border:"0"
        }}
          scope="col">{(item.replace(/_/g, " ")).toUpperCase()}</th>;
        });
      });
    return res;
  };

  const generateTds = () => {
    //    let tdList=[]
    //    let res= []
    let res = tableData.map((data) => {
      let values = Object.values(data);
      return (
        <tr>
          {values.map((item) => {
            return (
              <>
                <td
                  style={{
                    padding: "14px",
                    border: "0",
                  }}
                  scope="col"
                >
                  {item}
                </td>
              </>
            );
          })}
          {/* <UncontrolledDropdown>
							<DropdownToggle
								className="btn-icon-only text-light"
								// href="#pablo"
								role="button"
								size="sm"
								color=""
								onClick={e => e.preventDefault()}
							>
								<i className="fas fa-ellipsis-v" />
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-arrow" right>
					{
						actionArray.map(item=>{
							return(
								<DropdownItem
									href="#pablo"
									name="DELETE"
									onClick={item}
								>
									Delete
										</DropdownItem>
							)
						})
					}
					</DropdownMenu>
					</UncontrolledDropdown> */}
          <td
            style={{
              padding: "14px",
              border: "0",
            textAlign:"center"
              
            }}
          >
            <i style={{color:"rgba(125, 125, 125, 1)"}} class="fas fa-pen"></i>
          </td>
        </tr>
      );
    });
    return res;
  };
  return (
    <div className="table-responsive w-75" >
      <Table
        className="align-items-center table-bordered table-condensed table-striped w3-animate-bottom"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          backgroundColor: "white",
        }}
        responsive
      >
        <thead class="thead-dark">
          <tr>
            {
              // data.map()
              generateThs()
              // (tableHeaders) ? tableHeaders.map(header => (<th scope="col">{header}</th>)) : ""
            }
            <th className="opaqbg"
             style={{
                padding:"14px",
                border:"0",
                textAlign:"center"
            }}
            >ACTIONS</th>
          </tr>
        </thead>
        <tbody>{generateTds()}</tbody>
      </Table>
    </div>
  );
};

export default CustTable;
