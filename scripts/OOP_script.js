"use strict";

function isEmpty(user) { //check the object for empty
    for(let key in user) return false;
    return true;
}

function sum_of_salary(salary) { //the function of counting salaries of the workers
    let sum = 0;
    for(let key in salary) sum+=salary[key];
    return sum;
}

alert(user.name);
user.name = "Pete";
alert(user.name);
delete(user.name);
delete(user.surname);

alert(isEmpty(user));

user.name = "Artem";

alert(isEmpty(user));

alert(sum_of_salary(salaries));