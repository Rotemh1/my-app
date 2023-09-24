import './App.css';
import { React, useState, useRef } from 'react';
import _ from 'lodash';
import RightTab from './Components/RightTab/RightTab';
import LeftTab from './Components/LeftTab/LeftTab';


function App() {
  //array size states
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [sumVal, setSumVal] = useState(0);
  //matrix states
  const [matrix, setMatrix] = useState();
  const [validationMatrix, setValidationMatrix] = useState();
  //validation refs
  const colValmatrix = useRef();
  const rowValmatrix = useRef();
  const slantValmatrix = useRef();
  const slant2Valmatrix = useRef();

  //set arrays on right tab form submit
  const submitHandler = (vector) => {
    setXVal(parseInt(vector.x));
    setYVal(parseInt(vector.y));
    setSumVal(parseInt(vector.sum));
    setMatrix(Array(parseInt(vector.y)).fill(0).map(()=> Array(parseInt(vector.x)).fill(0)));
    setValidationMatrix(Array(parseInt(vector.y)).fill(true).map(()=> Array(parseInt(vector.x)).fill(true)));
    colValmatrix.current = Array(parseInt(vector.y)).fill(true).map(()=> Array(parseInt(vector.x)).fill(true));
    rowValmatrix.current = Array(parseInt(vector.y)).fill(true).map(()=> Array(parseInt(vector.x)).fill(true));
    slantValmatrix.current = Array(parseInt(vector.y)).fill(true).map(()=> Array(parseInt(vector.x)).fill(true));
    slant2Valmatrix.current = Array(parseInt(vector.y)).fill(true).map(()=> Array(parseInt(vector.x)).fill(true));
  };

  //sum validations
  //===================================================================
  //check if change needed in validation matrix, if needed updates validation matrix
  const isChangeNeeded = (rowchk,colchk, clonedValidMatrix) =>{
    if(rowValmatrix.current[rowchk][colchk] && colValmatrix.current[rowchk][colchk] && slantValmatrix.current[rowchk][colchk] && slant2Valmatrix.current[rowchk][colchk]){
      if(!clonedValidMatrix[rowchk][colchk]){
          clonedValidMatrix[rowchk][colchk] = true;
        }
    }
    else{
        if(clonedValidMatrix[rowchk][colchk])
        clonedValidMatrix[rowchk][colchk] = false;
    }
}
//check if column is valid
const columnCheck = (x, newMatrix) => {
    let sum = 0;
    for(let colcheck = 0; colcheck < yVal; colcheck ++){
        sum += !isNaN(parseInt(newMatrix[colcheck][x])) ? parseInt(newMatrix[colcheck][x]) : 0;
    }
    if (sum > sumVal){
        return false;
    };
    return true;
};
const columnIsValid = (x, isValid, clonedValidMatrix) => {
    for(let colcheck = 0; colcheck < yVal; colcheck ++){
        colValmatrix.current[colcheck][x] = isValid;
        isChangeNeeded(colcheck,x, clonedValidMatrix);
    }
    
};
//check if row is valid
const rowCheck = (y, newMatrix) => {
    let sum = 0;
    for(let rowchk= 0; rowchk < xVal; rowchk ++){
        sum += !isNaN(parseInt(newMatrix[y][rowchk])) ? parseInt(newMatrix[y][rowchk]) : 0;
    }

    if (sum > sumVal){
        return false;
    };
    return true
};
const rowIsValid = (y, isValid, clonedValidMatrix) => {
    for(let rowchk= 0; rowchk < xVal; rowchk ++){
        rowValmatrix.current[y][rowchk] = isValid;
        isChangeNeeded(y,rowchk, clonedValidMatrix);
    }
}
//check if up right to bottom left slant is valid
const slantCheck = (x,y, newMatrix) => {
    let sum = 0;
    let rowchk = x;
    let colchk = y;
    while(rowchk < yVal && colchk < xVal){
        sum += !isNaN(parseInt(newMatrix[rowchk][colchk])) ? parseInt(newMatrix[rowchk][colchk]) : 0 ;
        rowchk++;
        colchk++;
    }
    rowchk = x-1;
    colchk = y-1;
    while(rowchk >= 0 && colchk >= 0){
        sum += !isNaN(parseInt(newMatrix[rowchk][colchk])) ? parseInt(newMatrix[rowchk][colchk]) : 0;
        rowchk--;
        colchk--;
    }
    if (sum > sumVal){
        return false;
    };
    return true;
};
const slantIsValid = (x,y,isValid, clonedValidMatrix) => {
    let rowchk = x;
    let colchk = y;
    while(rowchk < yVal && colchk < xVal){
        slantValmatrix.current[rowchk][colchk] = isValid;
        isChangeNeeded(rowchk,colchk, clonedValidMatrix);
        rowchk++;
        colchk++;
    }
    rowchk = x-1;
    colchk = y-1;
    while(rowchk >= 0 && colchk >= 0){
        slantValmatrix.current[rowchk][colchk] = isValid;
        isChangeNeeded(rowchk,colchk, clonedValidMatrix);
        rowchk--;
        colchk--;
    }
}
//check if up left to bottom right slant is valid
const slant2Check = (x,y, newMatrix) => {
    let sum = 0;
    let rowchk = x;
    let colchk = y;
    while(rowchk < yVal && colchk >= 0){
        sum += !isNaN(parseInt(newMatrix[rowchk][colchk])) ? parseInt(newMatrix[rowchk][colchk]) : 0;
        rowchk++;
        colchk--;
    }
    rowchk = x-1;
    colchk = y+1;
    while(rowchk >= 0 && colchk < xVal){
        sum += !isNaN(parseInt(newMatrix[rowchk][colchk])) ? parseInt(newMatrix[rowchk][colchk]) : 0;
        rowchk--;
        colchk++;
    }
    if (sum > sumVal){
        return false;
    };
    return true;
}
const slant2IsValid = (x,y,isValid, clonedValidMatrix) =>{
    let rowchk = x;
    let colchk = y;
    while(rowchk < yVal && colchk >= 0){
        slant2Valmatrix.current[rowchk][colchk] = isValid;
        isChangeNeeded(rowchk,colchk, clonedValidMatrix);
        rowchk++;
        colchk--;
    }
    rowchk = x-1;
    colchk = y+1;
    while(rowchk >= 0 && colchk < xVal){
        slant2Valmatrix.current[rowchk][colchk] = isValid;
        isChangeNeeded(rowchk,colchk, clonedValidMatrix);
        rowchk--;
        colchk++;
    }
} ;
//sum validation rutine
const validationCheck = (x,y,newMatrix) => {
    const clonedValidMatrix = _.cloneDeep(validationMatrix);
    columnIsValid(y, columnCheck(y, newMatrix), clonedValidMatrix);
    rowIsValid(x, rowCheck(x, newMatrix), clonedValidMatrix);
    slantIsValid(x,y,slantCheck(x,y, newMatrix), clonedValidMatrix);
    slant2IsValid(x,y,slant2Check(x,y, newMatrix), clonedValidMatrix);
    setValidationMatrix(clonedValidMatrix);
};
//================================================================================================

  //value change handlers
  const getValueChangeHandler = (x,y) => (val) =>{
    const clonedMatrix = _.cloneDeep(matrix);
    clonedMatrix[x][y] = val;
    validationCheck(x,y,clonedMatrix);
    setMatrix(clonedMatrix);
  };


  return (
    <div className="App">
      <LeftTab xVal={xVal} yVal={yVal} sumVal={sumVal} matrix={matrix} getValueChangeHandler={getValueChangeHandler} validationMatrix={validationMatrix}/>
      <RightTab submitHandler={submitHandler} />
    </div>
  );
}

export default App;
