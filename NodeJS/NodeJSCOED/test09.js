const { setTimeout } = require("timers");

// setTimeout(()=>{
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     console.log("D");
// },1000)

setTimeout(()=>{console.log("A")},1000)
setTimeout(()=>{console.log("B")},500)
setTimeout(()=>{console.log("C")},200)