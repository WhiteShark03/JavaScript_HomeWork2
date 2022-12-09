//38.1 Массивы
// let arr = [1, 2, 3];
// alert(arr);
// console.log(arr);

//38.2
// let arr = ['Altykeev', 'Temirlan'];
// alert(arr);
// console.log(arr);

//39.1 Получение элементов массивов
// let arr = [1, 2, 3];
//alert(arr);

//39.2
// let arr = [1, 2, 3];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

//39.3
// let arr = [1, 2, 3];
// alert(arr[0] + arr[1] + arr[2]);

//39.4
// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3]);

//40.1 Длина массива
// let arr = ['a', 'b', 'c'];
// alert(arr.length);

//40.2
// let arr = ['a', 'b', 'c'];
// alert(arr[arr.length - 1]);

//41.1 Изменение элементов массива
// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = -2;
// arr[2] = -3;
// alert(arr);

//41.2 Перезапись элементов
// let arr = [777, 777, 777];

// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;

// arr[0] += '3';
// arr[1] += '3';
// arr[2] += '3';

// alert(arr);

//41.3
// let arr = [1, 2, 3];
// ++arr[0];
// ++arr[1];
// ++arr[2];
// alert(arr);

//42.1 Добавление элементов по ключам
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

//42.2
// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// alert(arr);

//43.1 Разреженные массивы
// let arr = [];

// arr[3] = 'a';
// arr[8] = 'b'; //9
// alert(arr.length);

//44.1 Добавление элементов через push
// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// alert(arr);

//44.2
// let arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// alert(arr);

//45.1 Ключи массивов из переменных
// let arr = ['a', 'b', 'c'];
// let key = 2;
// alert(arr[key]);

//45.1
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// alert(arr[key1] + arr[key2]);

//46.1 Оператор delete в массивах
// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[1];
// delete arr[3];
// console.log(arr.length); //5

//47.1 Поиск ошибок в коде с массивами
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);

//47.2
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

//47.3
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

//47.4
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

//48.1 Objects
// let obj = {
// 	1: 'Ponedelnik',
// 	2: 'Vtornik',
// 	3: 'Sreda',
// 	4: 'Chetverg',
// 	5: 'Pyatnica',
// 	6: 'Subbota',
// 	7: 'Voscreseniye',
// };
// console.log(obj);

//49.1 Вывод всего объекта
// let obj = {
// 	1: 'Январь',
// 	2: 'February',
// 	3: 'March',
// 	4: 'Aprile',
// 	5: 'May',
// 	6: 'June',
// 	7: 'Jule',
// 	8: 'August',
// 	9: 'September',
// 	10: 'October',
// 	11: 'November',
// 	12: 'December',
// };
// console.log(obj);

//50.1 Строковые ключи объектов
// let user = {
// 	name: 'Temirlan',
// 	surname: 'Altykeev',
// 	patronymic: 'Ruslanovich',
// };
// console.log(user['surname'], user['name'], user['patronymic']);

//51.1 Свойства объектов
// let date = {
// 	year: 2022,
// 	month: 'November',
// 	day: 9,
// };
// console.log(date.year + '-' + date.month + '-' + date.day);

//52.1 Ограничения на ключи объектов
// let obj = {
// 	'1a': 1, //обязательно
// 	'b2': 2, //не обязательно
// 	'с-с': 3, //обязательно
// 	'd 4': 4, //обязательно
// 	'e5': 5 //не обязательно
// };

//52.2
// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	e5: 5,
// };
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

//53.1 Изменение элементов объектов
// let obj = { x: 1, y: 2, z: 3 };
// obj.x = obj.x ** 2;
// obj.y = obj.y ** 2;
// obj.z = obj.z ** 2;
// console.log(obj);

//54.1 Добавление элементов в объекты
// let obj = {};
// obj['name'] = 'Temirlan';
// obj['Wife'] = 'Not interesting';
// console.log(obj);

//55.1 Неупорядоченность объектов
// let obj = {
// 	8885: 'Ni',
// 	1: 'San',
// 	777: 'Ohayo',
// };
// console.log(obj[8885], obj[1], obj[777]);

//56.1 Массив ключей объекта
// let obj = { x: 1, y: 2, z: 3 };
// let keys = Object.keys(obj);
// console.log(keys);

//57.1 Длина обьекта
// let obj = { x: 1, y: 2, z: 3 };
// console.log(Object.keys(obj).length);

//58.1 Ключи объектов из переменных
// let obj = { x: 1, y: 2, z: 3 };
// let key = 'x';
// console.log(obj[key]);

//59.1 Ошибка обращения к элементу по ключу
// let obj = { x: 1, y: 2, z: 3 };
// console.log(obj['x']);

//59.2
// let obj = { x: 1, y: 2, z: 3 };
// let key = 'x';
// console.log(obj[key]);

//60.1 Ошибка обращения к свойству
// let obj = { x: 1, y: 2, z: 3 };

// let prop = 'x';
// console.log(obj[prop]);

//60.2
// let obj = { x: 1, y: 2, z: 3 };

// let prop = 'x';
// console.log(obj[prop]);

//61.1 Вычисляемые свойства
// let key = 'x';

// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3,
// };

//61.2
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3,
// };
// console.log(obj);

//62.1 Оператор in
// let obj = { x: 1, y: 2, z: 3 };

// console.log('x' in obj); //true
// console.log('w' in obj); //false

//63.1 Оператор delete
// let obj = { x: 1, y: 2, z: 3 };
// delete obj.x;

// console.log('x' in obj); //false

//64.1 Типизация объектов
// console.log(typeof { x: 1, y: 2, z: 3 }); //object

//64.2
// console.log(typeof {}); //object

//65.3
// let obj = { x: 1, y: 2, z: 3 };
// console.log(typeof obj); //object

//65.4
// let obj = { x: 1, y: 2, z: 3 };
// console.log(typeof obj['x']); //object

//66.1 Массивы как объекты
// console.log(typeof { x: 1, y: 2, z: 3 }); //object

//66.2
// console.log(typeof [1, 2, 3]); //object

//66.3
// let arr = [1, 2, 3];
// console.log(typeof arr); //object

//66.4
// let arr = [1, 2, 3];
// console.log(typeof arr[0]); //number

//66.5
// let arr = ['1', '2', '3'];
// console.log(typeof arr[0]); //string

//67.1 Отличаем массивы от объектов
// console.log(Array.isArray([1, 2, 3])); //true

//67.2
// console.log(Array.isArray({ x: 1, y: 2, z: 3 })); //false

//68.1 Объекты и примитивы
//В JavaScript семь примитивных типов данных: string, number, boolean, null, undefined, symbol, bigint.

// let test = { x: 1, y: 2, z: 3 };
// console.log(test); //object обьект

//68.2
// let test = { x: 1, y: 2, z: 3 };
// console.log(test.x); //number примитив

//68.3
// let test = [1, 2, 3];
// console.log(test); //object обьект

//68.4
// let test = [1, 2, 3];
// console.log(test[1]); // number примитив

//68.5
// let test1 = [1, 2, 3];
// let test2 = 1;

// console.log(test1); //object обьект

//68.6
// let test1 = [1, 2, 3];
// let test2 = 1;

// console.log(test1[test2]); //number примитив

//68.7
// string number null underfined bigint boolean object

//69.1 Передача объектов по ссылке
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2); //'a' 2 3

//69.2
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1); //'a' 'b' 3

//69.3
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2); //'b' 2 3

//70.1 Константы с массивами или объектами
// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr); //a '!' c

//70.2
// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr); //error

//70.3
// const arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c'];
// console.log(arr); //error
