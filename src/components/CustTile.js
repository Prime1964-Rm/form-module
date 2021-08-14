import React, { useEffect } from 'react';
import './cust-tile.css'
import rightArrow from '../assets/abc@extraaedge.com.png'

const CustTile = ({title,description,action,isSelected, onClick, isFirst}) => {
    useEffect(()=>{
        console.log(isSelected)
    },[])
    return (
        <div onClick={onClick} className={isSelected?`cust-tile isSelected ${isFirst}`:`cust-tile ${isFirst}`}>
          <div className="tile-details">
          <div>
          <h4 className="tile-header">
             {title}
          </h4>
          <p className={title?"tile-description":"tile-header"}>
              {description}
          </p>
          </div>
          </div>
          <div className="tile-actions">
          {/* <i class="fas fa-chevron-right pointer"></i> */}
          <img src={rightArrow} />
          </div>
        </div>
    );
};

export default CustTile;