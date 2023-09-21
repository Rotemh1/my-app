import React, { useState } from "react";
import styles from './RightTab.module.css';

//Component for right tab form, used to set X,Y and Sum for table
const RightTab = (props) => {
    const [rightX, setRightX] = useState(0);
    const [rightY, setRightY] = useState(0);
    const [rightSum, setRightSum] = useState(0);

    const rightXChangeHandler = (e) => {
        setRightX(e.target.value);
    };

    const rightYChangeHandler = (e) => {
        setRightY(e.target.value);
    };
    const rightSumChangeHandler = (e) => {
        setRightSum(e.target.value);
    };
    const submitFormHandler = (e) =>{
        e.preventDefault();

        const vector = {
            x: rightX,
            y: rightY,
            sum: rightSum
        }
        props.submitHandler(vector);
        setRightX('');
        setRightY('');
        setRightSum('');
    };
    return(
        <div className={styles['right-tab-div']}>
            <form onSubmit={submitFormHandler}>
            <label htmlFor="x">
                    X=
            </label>
            <input type="number" id="x" onChange={rightXChangeHandler} value={rightX}/> <br />
            <label htmlFor="y">
                    Y=
            </label> 
            <input type="number" id="y" onChange={rightYChangeHandler} value={rightY}/> <br />
            <label htmlFor="sum">
            Sum=
            </label>
            <input type="number" id="sum" onChange={rightSumChangeHandler} value={rightSum}/><br />
            <button type="submit">submit</button>
            </form >
        </div>
    );
};

export default RightTab;