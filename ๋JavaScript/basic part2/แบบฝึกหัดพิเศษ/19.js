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
            console.log(sum);
        }   
        for(i=n-1;i>=1;i--){
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