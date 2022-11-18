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

function double_nums(menu) { //the function can double price of menu
    for(let key in menu) {
        if(typeof(menu[key]) == 'number')
            menu[key] *= 2;
    }
}

function marry(man, woman) { //marry function
    woman.husband = man;
    man.wife = woman;

    return {father : man, mother : woman,};
}

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

function Accumulator(value) {
    this.value = value;
    this.read = function() {
        let num = prompt("Enter a number: ", 10);
        this.value += Number(num);
    }
};