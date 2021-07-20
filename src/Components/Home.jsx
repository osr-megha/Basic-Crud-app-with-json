import React from 'react'

import blog1 from '../Assets/Images/blog1.jpg';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  image: {
  paddingLeft: "50%",
  paddingRight:"50%"
}
});

const Home = () => {

  const classes = useStyle;

    return (
      <React.Fragment>

      <div style={{display:"flex", alignItems:"space-around"}}>
      <img className={classes.image} src= {blog1} alt="home"/>
      </div>
      </React.Fragment>
            
       
    )
}

export default Home
