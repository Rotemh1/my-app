import React, { useState } from "react";
import styles from './LeftTab.module.css';

import Table  from "./Table/Table";
//left tab component, styles left div and fills it with table by x,y filled on right tab form.
const LeftTab = (props) => {

    return(
        <div className={styles['left-tab-div']}>
            <Table x={props.xVal} y={props.yVal} sum={props.sumVal} matrix={props.matrix} getValueChangeHandler={props.getValueChangeHandler} validationMatrix={props.validationMatrix}/>
        </div>
    );
};

export default LeftTab