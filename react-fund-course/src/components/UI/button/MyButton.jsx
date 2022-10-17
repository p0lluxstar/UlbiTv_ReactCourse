import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => { //...props значит все передаваемые пропсы будут улетать в кнопку button
    return(
        <button {...props} className={classes.myBtn}> 
            {children} 
        </button> 
    )
}

export default MyButton;