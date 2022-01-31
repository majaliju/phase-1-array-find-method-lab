// passes first test but not second test
// in 2 parts
/*
function superbowlWin(records){
    debugger;
    const winResult = records.find(winningYear);
    debugger;
    return winResult.year
    debugger;
}

const winningYear = function(record) {
    return record.result === 'W'  
}
*/


// passes first test but not second test
// all in one function
/*
function superbowlWin(records){
    debugger;
    const winResult = records.find(function(record) {
        debugger;
        return record.result === 'W'  
        debugger;
    })
    return winResult.year;
    debugger;
}
*/


// written with an if, else condition ; in 2 parts
// passes second test but not first

function superbowlWin(records){
    const winResult = records.find(winningYear);
    if (!!winResult === true){
        return winResult.year
    }
    else {
        return undefined
    }
    
}

const winningYear = function(record) {
    return record.result === 'W'  
}





