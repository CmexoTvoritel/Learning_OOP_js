"use strict";

let user = {
    name: "John",
    surname: "Smith",
    sayHi() {
        alert(`Hello, my name - ${this.name}`);
    }
}

let salaries = {
    John: 100,
    Ann: 150,
    Pete: 300,
    Artem: 400,
    Dima: 350,
    Evgeniy: 275,
}

let menu = {
    fish: 300,
    meat: 200,
    ice_cream: 50,
    title: "menu of restaurant",
}

let permission_1 = {
    canView: true,
};

let permission_2 = {
    canChange: true,
};

let calculator = {
    sum() {
        return Number(this.a) + Number(this.b);
    },
    mul() {
        return Number(this.a) * Number(this.b);
    },
    read(){
        this.a = prompt("a?", 0);
        this.b = prompt("b?", 0);
    }
};

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    },
};