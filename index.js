function saturdayFun(toDo = 'roller-skate') {
    return `This Saturday, I want to ${toDo}!`;
}
console.log(saturdayFun());
console.log(saturdayFun('bathe my dog'));

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());
console.log(mondayWork('work from home.'));

function wrapAdjective(flair ="*"){
    return function(adjective = "a hard worker"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
console.log(wrapAdjective("||")("a dedicated programmer"));