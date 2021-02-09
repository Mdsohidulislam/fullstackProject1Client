import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InfoCard = (props) => {
    const {title,bgc,description,logo}=props.info
 
    return (
        <div className='col-12 row col-md-4 p-1 text-white d-flex justify-content-center align-items-center' style={{backgroundColor:bgc,border:'5px solid white',height:'120px'}}>
            <div className='d-flex align-items-center' style={cardStyle}>
                <div className="logo">
                    <FontAwesomeIcon style={iconSize} icon={logo}/>
                </div>
                <div className="info">
                    <p style={infoStyle}><b>{title}</b></p>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
}; 
// 54983920

export default InfoCard;

const iconSize={
    fontSize:'40px',
    marginRight:'30px'
}

const infoStyle={
    margin:'0'
}

const cardStyle={
    height:'80px'
}