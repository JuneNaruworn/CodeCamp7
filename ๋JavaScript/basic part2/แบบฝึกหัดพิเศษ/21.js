function draw(n){
    for(i=1;i<=n;i++){
        let sum="";
        for(j=n;j>=1;j--){
            if(i>=j){
                sum = sum +"*";
            }else{
                sum = sum +"-";
            }    
        }
        for(j=1;j<=n-1;j++){
            if(i>j){
                sum = sum +"*";
            }else{
                sum = sum +"-";
            }
        }  
        console.log(sum);
      
     }   
}