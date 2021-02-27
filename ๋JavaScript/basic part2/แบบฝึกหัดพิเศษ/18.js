function draw(n){
    for(i=n;i>=1;i--){
        let sum="";
        for(j=n;j>=1;j--){
            if(i>=j){
                sum = sum +"*";
            }else{
                sum = sum +"-";
            }
        }  
        console.log(sum);
    }   
}
