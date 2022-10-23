import React from 'react';
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => { //React.forwardRef оборачивает весь компонент, и теперь он может принимать все пропсы и ref
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
            
    );
});

export default MyInput;