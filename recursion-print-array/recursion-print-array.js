/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(el) {
    for(let i = 0 ; i< el.length ; i++){
        if(typeof el[i] === 'number'){
            console.log(el[i])
        }else if(typeof el[i] === 'object'){
            if(printArray(el[i])){
            return printArray(el[i])
            }
        }
    }
};

module.exports = printArray;