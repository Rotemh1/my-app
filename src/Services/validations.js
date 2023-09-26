exports.columnCheck = (x, newMatrix, ySize, maxSum) => {
    if(maxSum < 0){
        throw new Error('maxSum must be greater then 0');
    }
    let sum = 0;
    for(let colcheck = 0; colcheck < ySize; colcheck ++){
        sum += !isNaN(parseInt(newMatrix[colcheck][x])) ? parseInt(newMatrix[colcheck][x]) : 0;
    }
    if (sum > maxSum){
        return false;
    };
    return true;
};

exports.rowCheck = (y, newMatrix, xSize, maxSum) => {
    if(maxSum < 0){
        throw new Error('maxSum must be greater then 0');
    }
    let sum = 0;
    for(let rowchk= 0; rowchk < xSize; rowchk ++){
        sum += !isNaN(parseInt(newMatrix[y][rowchk])) ? parseInt(newMatrix[y][rowchk]) : 0;
    }

    if (sum > maxSum){
        return false;
    };
    return true
};

exports.slantCheck = (x,y, newMatrix, xSize, ySize, maxSum) => {
    if(maxSum < 0){
        throw new Error('maxSum must be greater then 0');
    }
    let sum = 0;
    let rowchk = x;
    let colchk = y;
    while(rowchk < ySize && colchk < xSize){
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
    if (sum > maxSum){
        return false;
    };
    return true;
};

exports.slant2Check = (x,y, newMatrix, xSize, ySize, maxSum) => {
    if(maxSum < 0){
        throw new Error('maxSum must be greater then 0');
    }
    let sum = 0;
    let rowchk = x;
    let colchk = y;
    while(rowchk < ySize && colchk >= 0){
        sum += !isNaN(parseInt(newMatrix[rowchk][colchk])) ? parseInt(newMatrix[rowchk][colchk]) : 0;
        rowchk++;
        colchk--;
    }
    rowchk = x-1;
    colchk = y+1;
    while(rowchk >= 0 && colchk < xSize){
        sum += !isNaN(parseInt(newMatrix[rowchk][colchk])) ? parseInt(newMatrix[rowchk][colchk]) : 0;
        rowchk--;
        colchk++;
    }
    if (sum > maxSum){
        return false;
    };
    return true;
}