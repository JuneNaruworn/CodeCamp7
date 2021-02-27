function draw(n){
    for(i=n;i>=1;i--){
        let sum="";
        for(j=1;j<=n;j++){
            if(j==i){
                sum = sum + "-";
            }else{
                sum = sum + "*";
            }
        }  
        console.log(sum);
    }   
}