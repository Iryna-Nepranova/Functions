/*1.	Напишите функцию max, которая сравнивает два числа и возвращает большее: */

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(max(1, 2))

/*2.	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:*/

arr = [0, -1, 100, 500, 100500];

function min(arr) {
    arr.sort();
    return arr.shift();
}
min(arr)


/*3.	Изучите перебирающие методы массивов: forEach, filter, map. 
Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
a.	Отфильтруйте пользователей младше 18 лет
b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
c.	Сформируйте новый массив, который содержит только полное имя пользователей*/

let users = [
        { firstName: "Kate", lastName: "Smith", age: 26 },
        { firstName: "Ivan", lastName: "Ivanov", age: 64 },
        { firstName: "Karina", lastName: "Petrova", age: 34 },
        { firstName: "Inna", lastName: "Alekseeva", age: 21 },
        { firstName: "Denis", lastName: "Mironov", age: 18 },
        { firstName: "Peter", lastName: "Black", age: 12 },
        { firstName: "John", lastName: "Doe", age: 56 },
        { firstName: "Tom", lastName: "McDevis", age: 15 },
        { firstName: "Ann", lastName: "Peterson", age: 13 },
        { firstName: "Nick", lastName: "Johnson", age: 29 },
    ]
    //a
let ageFilter = users.filter((item) => item.age < 18);
console.log(ageFilter);

//b
users.forEach((item, i, users) => item.fullName = item.firstName + item.lastName);
console.log(users);

//c
let arrFullname = users.map((item) => {
    return item.fullName;
})
console.log(arrFullname);

/*4. Напишите функцию аналог метода массива shift.
 Функция удаляет из переданного в параметре массива первый элемент.*/

let arr = [0, 2, 3, 25];

function deleteStart(arr) {
    return arr.splice(0, 1)
}
deleteStart(arr)
console.log(arr)



/*5.Напишите функцию аналог метода массива push.
Функция добавляет в конец переданного в параметре массив 
произвольное количество элементов.*/

let arr = [0, 2, 3, 25];
let N = ["a", "b", 32, "i"];

function pushEnd(arr) {
    arr.length
    return arr.splice(arr.length, 0, N)
}
pushEnd(arr, N)
console.log(arr)

/*6.Напишите функцию аналог метода Object.assign().
 Первый параметр функции - целевой объект, поля которого будут изменены или расширены.
 Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.*/

function extend(obj, ...objects) {
    for (let i = 0; i < objects.length; i++) {
        for (let key in objects[i]) {
            obj[key] = objects[i][key];
        }
    }
    return obj;
}

var source = { firstname: 'Tom', age: 10 }
var s = extend(source, { firstname: 'John' }, { lastname: 'Doe' });
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}



/*Var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(s);// {firstname: 'John', age: 10, lastname: 'Doe'}
*/

/*7.Напишите функцию setComment с параметрами: 
 date, message, author. 
 Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, 
 то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. 
 Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. 
 Функция распечатываетв консоле текст в формате: 
				<имя_автора>, <дата>
				<текст_сообщения> */

function setComment(date, message, author = "Anonymous") {
    if (!date || !message) {
        return alert("данные переданы не корректно");
    } else {
        console.log(author, ",", date);
        console.log(message);
    }
}
setComment("2016-11-02", "Everything is ok", "John");
setComment("2016-11-02", "You could do it better!");
setComment("2016-11-02", "", "John");

//ЗАМЫКАНИЯ
/*1.Используя замыкание, напишите функцию createTimer,
 которая использует метод performance.now() для получения текущей временной метки
 и служит для замера времени выполнения другого кода(код менять, видоизменять нельзя,
 как написан так и должен остаться):*/

function createTimer() {
    let time1 = performance.now();
    return function() {
        let time2 = performance.now();
        console.log(time2 - time1)
    }
}

let timer = createTimer();
alert('!') // код, время выполнения которого нужно измерить
alert(timer()); // время в мкс от начала выполнения createTimer() до момента вызова timer()




/*2.Используя замыкания, создайте функцию createAdder(), 
которая принимает на вход любой примитивный параметр и возвращает функцию,
которая добавляет к первому параметру второй. Функция работает по следующему принципу:
Var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10

*/

function createAdder(item1) {
    return item2 => item1 + item2

}

var hello = createAdder('Hello, ');
console.log(hello('John')); // Hello, John
console.log(hello('Harry')); // Hello, Harry

var plus = createAdder(5);
console.log(plus(1)); // 6
console.log(plus(5)); // 10