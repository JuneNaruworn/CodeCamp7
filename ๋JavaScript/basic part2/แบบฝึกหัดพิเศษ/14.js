function draw(n){
    for(i=n;i>=1;i--){
        let sum="";
        for(j=1;j<=n;j++){
            if(i<j){
                sum = sum +"-";
            }else{
                sum = sum +"*";
            }
        }  
        console.log(sum);
    }   
}
