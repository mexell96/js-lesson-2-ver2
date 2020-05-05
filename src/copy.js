'use strict';
// Объявили студентов
let nikita = {
    firstName: 'Nikita', 
    lastName: 'Nikitov', 
    age: 23, 
    grades: [2, 3, 4, 1, 2], 
    course: 4, 
    gender: 'male',  
};
var sum=0;
for(var i=0;i<nikita.grades.length;i++){
    sum = sum + nikita.grades[i];
}
let avgGradesNikita = sum / nikita.grades.length;
nikita.avgGradesNikita = avgGradesNikita;


let less3 = avgGradesNikita < 3 ? true : false;
nikita.less3 = less3;
console.log(nikita);

let petya = {
    firstName: 'Petya', 
    lastName: 'Petin', 
    age: 18, 
    grades: [4, 5, 5, 2, 3], 
    course: 1, 
    gender: 'male',
};
var sum=0;
for(var i=0;i<petya.grades.length;i++){
    sum = sum + petya.grades[i];
}
let avgGradesPetya = sum / petya.grades.length;
petya.avgGradesPetya = avgGradesPetya;
//console.log(petya);

let sasha = {
    firstName: 'Sasha', 
    lastName: 'Sashin', 
    age: 20, 
    grades: [3, 5, 1, 1, 4], 
    course: 3, 
    gender: 'male',
};
var sum=0;
for(var i=0;i<sasha.grades.length;i++){
    sum = sum + sasha.grades[i];
}
let avgGradesSasha = sum / sasha.grades.length;
sasha.avgGradesSasha = avgGradesSasha;
//console.log(sasha);

let igor = {
    firstName: 'Igor', 
    lastName: 'Igorev', 
    age: 21, 
    grades: [1, 1, 2, 3, 2], 
    course: 3, 
    gender: 'male',
};
var sum=0;
for(var i=0;i<igor.grades.length;i++){
    sum = sum + igor.grades[i];
}
let avgGradesIgor = sum / igor.grades.length;
igor.avgGradesIgor = avgGradesIgor;
//console.log(igor);

let slava = {
    firstName: 'Slava', 
    lastName: 'Slavin', 
    age: 19, 
    grades: [1, 5, 5, 5, 2], 
    course: 1, 
    gender: 'male',
};
var sum=0;
for(var i=0;i<slava.grades.length;i++){
    sum = sum + slava.grades[i];
}
let avgGradesSlava = sum / slava.grades.length;
slava.avgGradesSlava = avgGradesSlava;
//console.log(slava);

let nastya = {
    firstName: 'Nastya', 
    lastName: 'Nastevna', 
    age: 23, 
    grades: [2, 3, 4, 2, 1], 
    course: 4, 
    gender: 'male',
};
var sum=0;
for(var i=0;i<nastya.grades.length;i++){
    sum = sum + nastya.grades[i];
}
let avgGradesNastya = sum / nastya.grades.length;
nastya.avgGradesNastya = avgGradesNastya;
//console.log(nastya);

let tanya = {
    firstName: 'Tanya', 
    lastName: 'Tanina', 
    age: 22, 
    grades: [1, 4, 4, 5, 5], 
    course: 3, 
    gender: 'female',
};
var sum=0;
for(var i=0;i<tanya.grades.length;i++){
    sum = sum + tanya.grades[i];
}
let avgGradesTanya = sum / tanya.grades.length;
tanya.avgGradesTanya = avgGradesTanya;
//console.log(tanya);

let lena = {
    firstName: 'Lena', 
    lastName: 'Lenina', 
    age: 25, 
    grades: [5, 5, 2, 4, 4], 
    course: 3, 
    gender: 'female',
};
var sum=0;
for(var i=0;i<lena.grades.length;i++){
    sum = sum + lena.grades[i];
}
let avgGradesLena = sum / lena.grades.length;
lena.avgGradesLena = avgGradesLena;
//console.log(lena);

let julia = {
    firstName: 'Julia', 
    lastName: 'Juliev', 
    age: 35, 
    grades: [4, 2, 1, 3, 1], 
    course: 3, 
    gender: 'female',
};
var sum=0;
for(var i=0;i<julia.grades.length;i++){
    sum = sum + julia.grades[i];
}
let avgGradesJulia = sum / julia.grades.length;
julia.avgGradesJulia = avgGradesJulia;
//console.log(julia);

let oksana = {
    firstName: 'Oksana', 
    lastName: 'Oksanina', 
    age: 28, 
    grades: [5, 4, 4, 1, 2], 
    course: 2, 
    gender: 'male',
};
var sum=0;
for(var i=0;i<oksana.grades.length;i++){
    sum = sum + oksana.grades[i];
}
let avgGradesOksana = sum / oksana.grades.length;
oksana.avgGradesOksana = avgGradesOksana;
//console.log(oksana);
// Запихали в массив
let  students = [nikita, petya, sasha, igor, slava, nastya, tanya, lena, julia, oksana];
//console.log (students);





// Проверить среднее оценок и возраст, если среднее меньше 3 и возраст от 18 до 27, то забирают в армию
let isReadyForArmy;
if (avgGradesNikita < 3 && nikita.age >= 18 && nikita.age < 27 && nikita.gender === 'male') {
    nikita.isReadyForArmy = 'Ты в армии';
} else {
    nikita.isReadyForArmy = 'Ты свободен';
}
// Если забирают в армию, то удалить оценки и курс
if (isReadyForArmy = 'Ты в армии') {
    delete(nikita.grades) && delete(nikita.course); 
} else {
    console.log(nikita);
    console.log(nikita.isReadyForArmy);

    

    
// фильтр должен вернуть студентов моложе 30
// но он не работает
let studentSoldier = students[m].age.filter(function(item) {
    return item < 27;
});
console.log(studentSoldier);