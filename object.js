let emp1 = {};
emp1.firstname = "Michael";
emp1.lastname = "Regional Manager";
emp1.gender = "M";
// console.log(emp1);

function createEmployeeObject(firstname, lastname, gender, designation) {
    let newObject = {};
    newObject.firstname = firstname;
    newObject.lastname = lastname;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;
}

let emp3 = createEmployeeObject("jim,", "lastname", "M", "sales repr");
console.log(emp3)