'use strict';
//задание № 1
//идентификаторы
const name = 'Oleg';
const birth = 1982;
const hy = name => console.log(`Привет,  ${name}`);
hy('Petro');
hy(name);
hy(birth);

//циклы

for (let i = 15; i <= 30; i += 2) console.log(i);

const range = (start, end) => {
  while (start <= end) {
    if (start % 2 !== 0) console.log(start);
    ++start;
  }
};
range(15, 30);

//функции
const average = (a, b) => (a / 2 + b / 2);
console.log(average(7, 14));

const square = a => a ** 2;
console.log(square(5));

const qube = a => a ** 3;


for (let i = 1; i <= 5; i++)
  console.log(average(square(i), qube(i)));

//Обекты
{
  const name = 'Oleg';
  let fio = { name };
  let zio = { name };
  console.log(fio);
  console.log(zio);
  let labla = 'Petro';
  fio = { labla };
  zio = { labla };
  console.log(fio);
  console.log(zio);
  const fish = 'karp';
  labla = fish;
  console.log(fio);
  console.log(zio);

  function createUser(name, city) {
    console.log({ name, city });
  }
  createUser('Marcus Aurelius', 'Roma');
}
//Массивы
const addressBook = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
  },
  {
    name: 'Oleg The King',
    phone: '+380123456789'
  }
];

function findPhoneByName(name) {
  for (let i = 0; i < addressBook.length; ++i) {
    if (addressBook[i].name === name)
      console.log(addressBook[i].phone);
  }
}
findPhoneByName('Marcus Aurelius');
//перебор массива forEach
function findPhoneByName2(name) {
  addressBook.forEach(element => {
    if (element.name === name) console.log(element.phone);
  }
  );
}
findPhoneByName2('Marcus Aurelius');

//перебор массива for in
function findPhoneByName1(name) {
  for (const value of addressBook) {

    if (value.name === name)
      console.log(value.phone);
  }

}
findPhoneByName1('Marcus Aurelius');

//хеш таблицы
{
  const addressBook = {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
  };
  function findPhoneByName(name) {
    for (const key in addressBook) {
      if (addressBook[key] === name)
        console.log(addressBook.phone);
    }
  }
  findPhoneByName('Marcus Aurelius');
}
