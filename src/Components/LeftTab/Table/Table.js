import React from "react";
import _ from 'lodash';
import TableInput from "./TableInput/TableInput";

//table making component, makes table with x columns and y rows and fills cells with input components
const Table = (props) =>{
    const cols = props.x;
    const rows = props.y;
  
    return (
      <div>
      <table>
      {
        _.times(rows, (rowNum) => (<tr key={rowNum}>{_.times(cols, (colNum) => <th key={colNum}><TableInput value={props.matrix[rowNum][colNum]} x={rowNum} y={colNum} valueChangeHandler={props.getValueChangeHandler(rowNum,colNum)} isValid={props.validationMatrix[rowNum][colNum]}/></th>)}</tr>))
      } 
      </table>
      </div>
    );
};

export default Table;