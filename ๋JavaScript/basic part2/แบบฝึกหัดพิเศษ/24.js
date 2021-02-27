function draw(n){
    let num = 1; 
    for(i=1;i<n;i++){
        let sum="";
        for(j=n;j>=1;j--){
            if(i>=j){
                sum = sum + String(num);
                num = Number(num) + 1;
            }else{
                sum = sum +"-";
            }    
        }
        for(j=1;j<=n-1;j++){
            if(i>j){
                sum = sum + String(num);
                num = Number(num) + 1;
            }else{
                sum = sum +"-";
            }
        }  
        console.log(sum);
      
     }
    for(i=n;i>=1;i--){
         sum="";
        for(j=n;j>1;j--){
            if(i>=j){
                sum = sum + String(num);
                num = Number(num) + 1;
            }else{
                sum = sum +"-";
            }
        }
        for(j=1;j<=n;j++){
            if(i<j){
                sum = sum +"-";
            }else{
                sum = sum + String(num);
                num = Number(num) + 1;
            }
        }  
        console.log(sum);
    }   
}
