let defaultCharSet = '';

function addNumbersFromZeroToNine(){
    for(var i=0;i<10;i++)
        defaultCharSet += i;
}

function addLowerCaseAlphabets(){
    for(var i=0,k=97;i<26;i++,k++)
        defaultCharSet += String.fromCharCode(k);
}

function addUpperCaseAlphabets(){
    for(var i=0,k=65;i<26;i++,k++)
        defaultCharSet += String.fromCharCode(k);
}

function encodeToBase62(counter){
    const numStr = counter+'';
    const num = parseInt(joinInSeriesOfASCII(numStr));
    return encodeInput(num);
}

function encodeInput(num){
    let result = '';
    while(num > 0){
        result += defaultCharSet[num % 62];
        num = Math.floor(num/62);
    }
    return result;
}

function joinInSeriesOfASCII(str){
    str = str+'';
    const chars = [];
    for(var i=0;i<str.length;i++){
        chars.push((''+str[i]).charCodeAt(0));
    }
    return chars.reduce(function(previousValue,currentValue,array){
        return previousValue+''+currentValue;
    },'');
}

function decodeInputFromBase62(str){
    const number = decodeInput(str);
    const actualIndex = getActualNumberFromASCIISeries(number);
    return actualIndex;
}

function decodeInput(str){
    let result = 0;
    for(var i=0;i<str.length;i++){
        const index = defaultCharSet.indexOf(str[i]);
        result = result + (index*Math.pow(62,i))
    }
    return result;
}

function getActualNumberFromASCIISeries(num){
    let result = '';
    while(num > 0){
        result += String.fromCharCode(num%100);
        num = Math.floor(num/100);
    }
    const resultArray = Array.from(result);
    for(var i=0,j=resultArray.length-1;i<j;i++,j--){
        const temp = resultArray[i];
        resultArray[i] = resultArray[j];
        resultArray[j] = temp; 
    }
    return parseInt(resultArray.join(''));
}

addNumbersFromZeroToNine();
addLowerCaseAlphabets();
addUpperCaseAlphabets();

module.exports = {
    encodeToBase62: encodeToBase62,
    decodeInputFromBase62: decodeInputFromBase62
}
