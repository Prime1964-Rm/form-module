import React, { useEffect, useState } from "react";
import CustTile from "../components/CustTile";
import { data } from "../data";
import "./settings.css";
import { Breadcrumb } from "react-bootstrap";
import CustBreadCrumb from "../components/breadcrumb/CustBreadCrumb";
import LeadStatusGroupView from "./lead-status-group/LeadStatusGroupView";
import FormModal from "../components/form-modal/FormModal";

const Settings = () => {
  const [show, setShow] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [isSelectedSubOption, setIsSelectedSubOption] = useState(null);
  const [prevStep,setPrevStep] = useState([]);
  const [breadcrumbdata, setBreadCrumbData] = useState([
    {
      title: "Settings",
    },
  ]);

  const handleForm = () =>{
    setShow(true)
  }
  useEffect(()=>{
    console.log(show)
  },[show])

  let [titleOfSelected, settitleOfSelected] = useState([]);
  const onSettingsOptionClick = (idx) => {
    if (idx === isSelected) {
      setIsSelected(null);
      setBreadCrumbData([
       {
         title:"Settings"
       }
      ])
    } else {
      setIsSelected(idx);
      setPrevStep([
        ...breadcrumbdata
      ])
      setBreadCrumbData([
        ...breadcrumbdata,
        {
          title:"Setup Masters"
        }
      ])
    }
  };

  const onSettingsSubOptionClick = (idx) => {
    if (idx === isSelectedSubOption) {
      setIsSelectedSubOption(null);
      setBreadCrumbData([
        ...prevStep
      ])
    } else {
      setIsSelectedSubOption(idx);
      setPrevStep([
        ...breadcrumbdata
      ])
      setBreadCrumbData([
        ...breadcrumbdata,
        {
          title:"Lead Status Group"
        }
      ])
    }
  };

  const onBackClick = () =>{
    setBreadCrumbData([
      ...prevStep
    ])
    setIsSelectedSubOption(null)
  }

  return (
    <>
    <FormModal show={show} setShow={setShow}/>
    <div className="settings-main">
      <div className="head">
       <CustBreadCrumb length={breadcrumbdata.length} onBackClick={onBackClick} data={breadcrumbdata} />
      </div>
      {isSelectedSubOption !== null ? (
        <LeadStatusGroupView setShow={setShow} />
      ) : (
        <div className="settings-container">
          <div className="settings-options">
            <div className="blocks ">
              <h1 className="main-titles">Masters</h1>
              <div className="tile-list">
                {data.masters.map((item, idx) => {
                  return (
                    <CustTile
                      title={item.title}
                      key={idx}
                      isFirst={idx===0?"first":""}
                      description={item.description}
                      isSelected={idx === isSelected ? true : false}
                      onClick={(e) => {
                        onSettingsOptionClick(idx);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="blocks ">
              <h1 className="main-titles">Users & Roles</h1>
              <div className="tile-list">
                {data.users_roles.map((item, idx) => {
                  return (
                    <CustTile
                      title={item.title}
                      key={idx}
                      isFirst={idx===0?"first":""}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
            <div className="blocks ">
              <h1 className="main-titles">Display Settings</h1>
              <div className="tile-list">
                {data.displaySettings.map((item, idx) => {
                  return (
                    <CustTile
                      title={item.title}
                      key={idx}
                      isFirst={idx===0?"first":""}
                      className={"first-el"}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {isSelected !== null ? (
            <>
              <div className="settings-sub-options">
                <div className="blocks ">
                  <h1 className="main-titles">Lead</h1>
                  <div className="tile-list">
                    {data.lead.map((item, idx) => {
                      return (
                        <CustTile
                          onClick={() => {
                            onSettingsSubOptionClick(idx);
                          }}
                          title={item.title}
                          key={idx}
                          isFirst={idx===0?"first":""}
                          description={item.description}
                          isSelected={
                            idx === isSelectedSubOption ? true : false
                          }
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="blocks ">
                  <h1 className="main-titles">Entity</h1>
                  <div className="tile-list">
                    {data.entity.map((item, idx) => {
                      return (
                        <CustTile
                          title={item.title}
                          key={idx}
                          isFirst={idx===0?"first":""}
                          description={item.description}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
    </>
  );
};

export default Settings;
