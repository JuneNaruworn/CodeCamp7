function draw(n){
    for(i=1;i<=n;i++){
        let sum="";
        for(j=1;j<=n;j++){
            sum +=  (i*j);
        }  
        console.log(sum);
    }   
}