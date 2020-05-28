import React from "react";
import classes from './Logo.css';
import appLogo from "../../assets/images/logo.png";

const logo = (props) => {
    return (
        <div 
        className={classes.Logo}
        style={{height: props.height}}><img alt="Nothing" src={appLogo}/></div>
    );
};

export default logo;