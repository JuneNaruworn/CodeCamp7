function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true เนื่องจากอ้างอิงตัวแรกก่อนเขียน

// _____________________________________________________________________________________________________________
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false เนื่องจากเขียนเข้าไปเพิ่มในprototypeจะมีการอัพเดท

// _____________________________________________________________________________________________________________

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true  เพราะ eats ไม่ได้อยู่ ใน rabbit 

// _____________________________________________________________________________________________________________

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined เนื่องจากถูกลบจากprototype

let obj2 = new obj.constructor();

