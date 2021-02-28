function f(a, b) {
    alert( a + b );
  }
  
  Function.prototype.defer = function(ms){

    let f = this; //เก็บobjเพื่อเอาไปใช้ใน function ที่ถูกเรียกใช้ต่อ return
    return function(a,b){
      setTimeout(()=>f(a,b),ms) //เรียกใช้ f(a,b) เมื่อผ่านไป ms
    }
  }
  
  f.defer(1000)(1, 2); // เมื่อถึง 1 วิ จะแสดง 3