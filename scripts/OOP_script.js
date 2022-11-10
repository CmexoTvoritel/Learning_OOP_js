function isEmpty(user) {
    for(let key in user) return false;
    return true;
}

let user = {
    name: "John",
    surname: "Smith",
}
alert(user.name);
user.name = "Pete";
alert(user.name);
delete(user.name);
delete(user.surname);
alert(isEmpty(user));
user.name = "Artem";
alert(isEmpty(user));