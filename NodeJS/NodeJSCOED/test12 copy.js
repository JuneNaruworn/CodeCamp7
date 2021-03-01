function showText(text,time){
    return new Promise(re => {
        console.log(text);
        setTimeout(()=> re() ,time)
    })
}

async function runText(){
    try{    
        await showText('1',1000)
        await showText('2',1000) 
        await showText('3',1000) 
        await showText('4',1000) 
        console.log('Done') 
    } catch(err) {
        console.log(err)
    }
}

runText()