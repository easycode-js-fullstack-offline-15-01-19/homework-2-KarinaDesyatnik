// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------
let a;
//Преобразование примитивов. Задачи.
//Чему равно а, почему?
a = 0 || 'string'; // a = string, логический оператор || запинается на правде, так как 0 = false, a 'string' = true то код ведет string
a = 1 && 'string'; // a = string, логический оператор && запинается на лжи, а если все значения исинны то выводит последнее. Так как 1 и 'string' = true, то получаем последнее значениие тоесть string
a = null || 25; // a = 25, так как 25 = true, a null = false. Соответственно  оператор || возвращает значение которое является истинным
a = null && 25; // a = null, так как null = false. Соответственно оператор && возвращает значение  которое является  ложным
a = null || 0 || 35; // a = 35 так как это единственное истинное значение в этом выражении
a = null && 0 && 35; // a = null так как оператор && выводит первое ложное значение

//Что отобразится в консоли. Почему?
a = 12 + 14 + '12'; //в консоли отобразиться 2612, така как произойдет сложения двух чисел 12+14=26 преобразование и конкатенация этого числа со строкой 12
a = 3 + 2 - '1'; // в консоли отобразиться 4, так как произойдет сложение чисел 3 и 2, преобразование строки "1" в число и вычитание из 5 единицы
a = '3' + 2 - 1; // в консоли отобразиться 31, так как строка первая то ее преобразование в число не произойдет, произойдет вычетание 2 из 1 в результате получаем 1 и происходит конкатенация 3 с 1 получаем 31
a = true + 2; // в консоли отобразиться 3, так как true в числовом выражении это еденица 1 + 2 = 3
a = +'10' + 1; // в консоли отобразиться 11, так как унарный плюс, преобразует строку в число и произойдет сложение 10+1
a = undefined + 2; // в консоли отобразиться NaN так как undefined при преобразовании в число = NaN , тоесть математические операции невозможны
a = null + 5; // в консоли отобразиться 5, так как null равен 0
a = true + undefined; //в консоли отобразиться NaN, так как undefined при преобразовании в число = NaN , тоесть математические операции невозможны

//If else. Задачи.
//1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let owerflow = 'hidden';
if (owerflow === 'hidden') {
    owerflow = 'visible';  
} else {
    owerflow = 'hidden';
}

// 2.  Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let value = 0;
if (value === 0) {
    value = 1;
} else if (value < 0 ) {
    value = 'less then zero';
} else {
    value *= 10; // в этом случае можно не пропысывать условие (value > 0), так как это единственное оставшееся не прописанным условие, поэтому подойдет else
}
// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {                                 
    car.needRepair = false; //в этом примере если не использовать else всё равно во всех случаях когда возрост машины будет меньше или равен 5 значение свойство needRepair будет равно false так как мы изначально установили ему такое значение свойства
}
// Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение 
// то в объекте item создать поле priceWithDiscount и записать туда
//  цену с учетом скидки и вывести ее в консоль, обратите внимание  
//  что поля discount и price это строки и вам из них нужно получить 
//  числа чтобы выполнить расчет. иначе если поля discount нет
//   то вывести просто поле price в консоль.

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};
if (item.discount) {
    item.priceWithDiscount = parseInt(item.price) - parseInt(item.discount);
    console.log(item.priceWithDiscount);    
} else {
    console.log(item.price);
}
// 5. Дан следующий код:
// let product = {
//     name: “Яблоко”,
//     price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна 
// максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('products not found');
}

//Тернарный оператор. Switch case. Задачи.

// 1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let display = 'block';
switch (display) {
    case 'block': 
        console.log(display); 
        break;
    case 'none': 
        console.log(display); 
        break;
    case 'inline': 
        console.log(display); 
        break;
    default: 
        console.log('block');
}

//2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let block = 'hidden';
block = block === 'hidden' ? 'visible' : 'hidden';
// 2.  Записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let val = 0;
val === 0 ? val = 1
    : val < 0 ?  val = 'less then zero' 
        : val *= 10;

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.

car.age > 5 ? (console.log('Need Repair'), car.needRepair = true)
    : car.needRepair = false;





