function draw(n){
    let sum = "";
    let num = 0 ;
    for(i=1;i<=n;i++){
        sum ="";
        for(j=1;j<=n;j++){
         num++;
         sum = sum + String(num);
       }
       console.log(sum);
    } 
}