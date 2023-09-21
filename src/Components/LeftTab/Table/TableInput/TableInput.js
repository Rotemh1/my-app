import {React} from 'react';
import styles from './TableInput.module.css';

const TableInput = (props) => {
    
    //sets input ID to rowNum-columnNum 
    const inputID = `${props.x}-${props.y}`;
    
    //calls value change handler on input change
    const inputChangeHandler = (e) => {
        props.valueChangeHandler(e.target.value);
    };
    
    return(
        <input id={inputID} type="number" value={props.value} onChange={inputChangeHandler} className={`${props.isValid ? styles['valid'] : styles['invalid']}`}/>
    );
};

export default TableInput;