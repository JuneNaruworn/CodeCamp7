// function showText(text,time){
//     return new Promise((re,rj) => {
//         setTimeout(()=> {
//             console.log(text);
//             re();
//         },time)
//     })
// }


// showText('a',1000)
// .then( () => {return showText('b',1000)})
// .then( () => {return showText('c',1000)})
// .then( () => {return showText('d',1000)})
// .then( () =>console.log('Done'))



function showText(text,time){
    return new Promise(re => {
        console.log(text);
        setTimeout(()=> re() ,time)
    })
}


showText('1',1000)
.then( () =>  showText('2',1000) )
.then( () =>  showText('3',1000) )
.then( () =>  showText('4',1000) )
.then( () =>console.log('Done') )