import React from 'react';
import Chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <div className='d-flex flex-wrap align-items-center py-5'>   
            <div className="col-10 offset-1 col-md-4 offset-md-1 mb-3">
                    <h1>Your New Smile <br/> Starts Here</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo  ratione?</p>
                    <button className="btn btn-info">GET APPOINTMENT</button>
            </div>
            <div className="col-12 col-md-6">
                <img src={Chair} className='img-fluid' alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;