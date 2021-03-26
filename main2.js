/*
створити масив та вивести його в консоль:
 - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу*/
/*let numbArray = [ 5,12,2,4,8 ];
console.log(numbArray);
let shopArray = [ 'milk', 'bread', 'egg', 'tomato', 'meat'];
console.log(shopArray);
let priceArray = [  'milk', 'bread',12,true,'egg', 'tomato',20, false];
console.log(priceArray);*/

/*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
/*
let showArray = [];
showArray [0] = true;
showArray [1] = 'milk';
showArray [2] = 456;
showArray [3] = 45;
showArray [4] = 'now';
console.log(showArray);*/
/*
За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

/*
for (let i = 0; i < 10; i++) {
   document.write('<div>Great</div>')

}
*/

/*
За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

/*
for (let i = 0; i < 10; i++) {
    document.write(`<div>Great ${i}</div>`)

}
*/
/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

/*let i = 0;
while (i < 20) {
    document.write('<div><h1>form </h1></div>') ;
    i++;

}*/


/*
За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 */
/*
let i = 0;
while (i < 20) {
    document.write(`<div><h1>form ${i}</h1></div>`) ;
    i++;

}
*/
/* Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*
const numb = [32,58,4,74,19,47,25,65,9,10];
for (let i = 0; i < numb.length; i++) {
    console.log(numb[i]);

}*/

/*
Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
/*
const word = ['milk','text','10','30','sold','wow','seven','mod','56','2'];
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);

}*/
/*
Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
/*
let showArray = [true,'milk',456,'now',false,12,'sold','58',56,'tree'];
*/

/*
showArray.forEach(i=> {console.log(i)});
*/
/*
Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
вивести тільки булеві елементи
*/
/*for (let i = 0; i< showArray.length; i++) {
if ( typeof  showArray[i] ==="boolean")
{console.log(showArray[i])}
else {  }}*/
/*
Створити масив з 10 елементів числового, стірчкового і булевого типу.
 За допомогою if та typeof вивести тільки числові елементи
*/
/*for (let i = 0; i< showArray.length; i++) {
    if ( typeof  showArray[i] ==="number")
    {console.log(showArray[i])}
    else {  }}*/
/*Створити масив з 10 елементів числового, стрічкового і булевого типу.
    За допомогою if та typeof вивести тільки рядкові елементи*/
/*for (let i = 0; i< showArray.length; i++) {
    if ( typeof  showArray[i] ==="string")
    {console.log(showArray[i])}
    else {  }}*/
/*Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
    Вивести в консоль всі його елементи в циклі.*/
/*let showArray = [];
showArray [0] = true;
showArray [1] = 'milk';
showArray [2] = 456;
showArray [3] = 45;
showArray [4] = 'now';
showArray [5] = false;
showArray [6] = 12;
showArray [7] = 5;
showArray [8] = 'sold';
showArray [9] = '58';

for (let i = 0; i < showArray.length; i++) {
console.log(showArray[i]);

}*/
/*
Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*
for (let i = 0; i <10; i++) {
    console.log('one ',i);
document.write(`one ${i}<br>`)
}*/
/*
Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
/*
for (let i = 0; i <100; i++) {
    console.log('one ',i);
    document.write(`one ${i}<br>`)}*/
/*
Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
*/
/*
let two= 0
for (let i = 0; i <100; i++) {
    console.log('two',i);
    document.write(`two ${i}<br>`);
  two +=2;
}*/
/*
 Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
*/
/*
for (let i = 0; i < 100; i++) {
    if (i%2===0){
    console.log('two',i);
    document.write(`two ${i}<br>`);}

}*/

/*
Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
*/
/*
for (let i = 0; i < 100; i++) {
    if (i%2===1) {
        console.log('two',i);
        document.write(`two ${i}<br>`);
    }}*/
/*Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)*/
/*
let time = 59;
let sec = 0;
let min = 0;
for (let i = 0; i <= time; i++) {

    console.log('min',min++);

for (let i = 0; i <= time; i++) {
   console.log('seconds',sec++);

}
sec=0;
}

*/


 /*Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)*/

/*
let time = 59;
let sec = 0;
let min = 0;
let hour = 0;
for (let i = 0; i <= 24; i++)
{
    console.log('hour',hour++);

    for (let i = 0; i <= time; i++) {

        /!*console.log('minutes',min++);*!/

        for (let i = 0; i <= time; i++) {
        /!*    console.log('seconds',sec++);*!/

        }
        sec=0;
    }
min=0;

}*/
