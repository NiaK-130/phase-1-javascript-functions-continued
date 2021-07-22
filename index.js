// Your code here

function saturdayFun(activity){
    if (activity === undefined){
        return `This Saturday, I want to roller-skate!`
    } else {
        return `This Saturday, I want to ${activity}!`
    }  
}

//----------------------------------------------------------//


function mondayWork(location){
    if (location === undefined){
        return 'This Monday, I will go to the office.';
    } else {
        return `This Monday, I will ${location}.`
    }
}


//----------------------------------------------------------//

function wrapAdjective(name){

    const part1 = "special"
    return `You are special`
    

}
    

function wrapAdjective(flair = '*') {
    return function (adj = 'special') {
        return `You are ${flair}${adj}${flair}!`;
    }
}

const promptFunction = wrapAdjective('!!!')