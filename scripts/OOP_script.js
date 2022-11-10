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