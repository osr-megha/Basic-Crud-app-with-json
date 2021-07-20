import React from 'react'
import img1 from '../Assets/Images/img1.jpg';

const NotFound = () => {
    return (
        <React.Fragment>
        <div style={{width:"100%",backgroundColor:"#90EE90"}}>
        <img src={img1} alt="404 not found" style={{width:"50%", margin:"80px 0 0 20%"}} />
        </div>
        </React.Fragment>
    )
}

export default NotFound
