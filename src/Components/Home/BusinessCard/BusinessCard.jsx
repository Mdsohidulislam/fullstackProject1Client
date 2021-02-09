import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


const BusinessCard = () => {

    const businessInfos=[
        {bgc:'#1CC7C1', title:'Opening Hours',description:'Lorem ipsum dolor, sit amet consectetur.',logo:faClock},
        {bgc:'#3A4256', title:'Visit our location',description:'Brooklyn, NY 10036, United States.',logo:faMapMarkerAlt},
        {bgc:'#1CC7C1', title:'Contact us now',description:'+0001234566789',logo:faPhoneVolume}
    ];

    return (
        <div style={{margin:'0 80px'}} className='row d-flex justify-content-around'> 
            {businessInfos.map(info=> <InfoCard info={info}></InfoCard>)}
            
        </div>
    );
};

export default BusinessCard;