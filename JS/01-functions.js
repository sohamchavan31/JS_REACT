const { log } = require("node:console")

function adbs(){

}

let func = function(){

}

let abcd = ()=>{

}

function dance(value1){
    console.log(`${value1} is runing`);
}

dance("man")
dance("woman")
dance("cheetah")

function num(...val){
    console.log(val);
}

num(1,2,3,4,5,6,7,"a","b","c","d","e","f")
