// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

/* const numbers = document.querySelector(".numbers");
for(let i = 100; i >= 50; i-=10){
numbers.innerHTML += `
<p>${i}</p>
`
} */

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const names = ["Arsen", "Esmira", "Hanna", "Artem", "Vasylyna"]
// const stringsContainner = document.querySelector(".strings_container")
// names.forEach(function(imena){
// stringsContainner.innerHTML += `
// <p>${imena}</p>
// `
// })

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
// const usersContainer = document.querySelector(".users_container")
// const users = [
//     {
//         first_name: "Arsen",
//         last_name: "Lusupov",
//         age: 25
//     },
//     {
//         first_name: "Esmira",
//         last_name: "Abdullayeva",
//         age: 17
//     },
//     {
//         first_name: "Mariia",
//         last_name: "Beljavskii",
//         age: 30
//     },
//     {
//         first_name: "Grigory",
//         last_name: "Koltso",
//         age: 16
//     }
// ]

// users.forEach(function(name){
//     if(name.age >= 18) {
//         usersContainer.innerHTML += `
//         <p>first_name:${name.first_name}</p>
//         <p>last_name:${name.last_name}</p>
//         <p>age:${name.age}</p>
//         `
//     }
// })