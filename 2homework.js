// задание №2
// поднятие
console.log(host());
function host () {
    let a = 3;
    return a
}
//скалярные и сылочные типы данных
const a = 5;
const inc = numbr => numbr*2;
const b = inc(a);
console.log({a, b});

const inc = num => num.n+=3;
const obj = {n: 5};
inc(obj);
console.log (obj);

// типы обектов

const mas = [true, 'hello', 5, 12, -200, false, false, 'word', 'kiev', 145];
const col = { number: 0, string: 0, boolean: 0 };

const calc = arr => {
for ( let element of arr) {
   typeof element === 'number' ?
   col.number++ :
   typeof element === "string"  ?
   col.string++  :
   col.boolean++;
}
}
calc(mas);
console.log(col);
