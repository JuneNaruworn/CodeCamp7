function draw(n){
    let sum = "";
    let num = (n*n)+1 ;
    for(i=n;i>=1;i--){
        sum ="";
        for(j=n;j>=1;j--){
         num--;
         sum = sum + String(num);
       }
       console.log(sum);
    } 
}