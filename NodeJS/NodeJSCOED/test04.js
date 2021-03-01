const fs = require('fs');

//  for (let i = 0; i < 20; i++) {
//     fs.readFile('codecamp1.txt', 'utf8', (err, data) => {
//       console.log(data);
//     });
    
//     fs.readFile('codecamp2.txt', 'utf8', (err, data) => {
//       console.log(data);
//     });
// }

for (let i = 0; i < 20; i++) {
    const c1 =fs.readFileSync('codecamp1.txt', 'utf8');
    console.log(c1);
    
    const c2 =fs.readFileSync('codecamp2.txt', 'utf8');
    console.log(c2);
    
}