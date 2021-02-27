function draw(n){
    for(i=1;i<=n;i++){
            let sum="";
            for(j=1;j<=n;j++){
                if(i>=j){
                    sum = sum +"*";
                }else{
                    sum = sum +"-";
                }
            }  
            console.log(sum);
        }   
    
        for(i=n-1;i>=1;i--){
             sum="";
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
