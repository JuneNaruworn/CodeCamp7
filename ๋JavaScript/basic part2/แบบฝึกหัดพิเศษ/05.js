function draw(n){
    let sum = "";
    for(i=n;i>=1;i--){
        sum = "";
        for(j=1;j<=n;j++){
         sum = sum + String(i);
       }
       console.log(sum);
    } 
}