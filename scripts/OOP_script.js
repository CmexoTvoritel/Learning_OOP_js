"use strict";

alert(user.name);
user.name = "Pete";
alert(user.name);
delete(user.name);
delete(user.surname);

alert(isEmpty(user));

user.name = "Artem";

alert(isEmpty(user));

alert(sum_of_salary(salaries));

double_nums(menu);
alert(`${menu.title}:`);
for(let key in menu) {
    if(key != 'title')
     alert(`${key}: ${menu[key]}`);
}

Object.assign(user, permission_1, permission_2);
let clone = Object.assign({}, user);
alert(clone.name);


let family = marry( 
    {name: "Artem"},
    {name: "Kate"},
);
alert(`father: ${family.father.name}, mother: ${family.mother.name}`);
user.sayHi();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

ladder.up().up().down().showStep().down().showStep();

alert(user_2.name);

accumulator.read();
accumulator.read();
alert(accumulator.value);