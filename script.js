let database = [];
const defaultNames = ['JAMES', 'JORDAN', 'KAREEM', 'WILT', 'BILL', 'MAGIC', 'LARRY', 'KOBE', 'SHAQ', 'ALLEN', 'LEBRON', 'STEPHEN', 'KEVIN', 'KAWHI', 'GIANNIS', 'ANTHONY', 'JAMES', 'PAUL', 'RUSSELL', 'KARL', 'TIM', 'SHAQUILLE', 'JAMES', 'JORDAN', 'KAREEM', 'WILT', 'BILL', 'MAGIC', 'LARRY', 'KOBE', 'SHAQ', 'ALLEN', 'LEBRON', 'STEPHEN', 'KEVIN', 'KAWHI', 'GIANNIS', 'ANTHONY', 'JAMES', 'PAUL', 'RUSSELL', 'KARL', 'TIM', 'SHAQUILLE', 'JAMES', 'JORDAN', 'KAREEM', 'WILT', 'BILL', 'MAGIC', 'LARRY', 'KOBE', 'SHAQ', 'ALLEN', 'LEBRON', 'STEPHEN', 'KEVIN', 'KAWHI', 'GIANNIS', 'ANTHONY', 'JAMES', 'PAUL', 'RUSSELL', 'KARL', 'TIM', 'SHAQUILLE', 'JAMES', 'JORDAN', 'KAREEM', 'WILT', 'BILL', 'MAGIC', 'LARRY', 'KOBE', 'SHAQ', 'ALLEN', 'LEBRON', 'STEPHEN', 'KEVIN', 'KAWHI', 'GIANNIS', 'ANTHONY', 'JAMES', 'PAUL', 'RUSSELL', 'KARL', 'TIM']
if (localStorage.getItem('databaseTest')) {
    database = JSON.parse(localStorage.getItem('databaseTest'));
}

const employeesDiv = document.getElementById('data');
const createButton = document.getElementById('btnCreate');
const readButton = document.getElementById('btnRead');
const updateButton = document.getElementById('btnUpdate');
const deleteButton = document.getElementById('btnDelete');

createButton.addEventListener('click', () => {
    const name = prompt('Enter Name Of Employee', defaultNames[Math.floor(Math.random() * defaultNames.length)]);
    database.push({ name });
    localStorage.setItem('databaseTest', JSON.stringify(database));
    readButton.click();
});

readButton.addEventListener('click', () => {
    if (database.length === 0) {
        return employeesDiv.innerHTML = '<h3>No Employees To Display, Please Create Some Employees First</h3>';
    }

    employeesDiv.innerHTML = database.map((item, index) => {
        return `<h3>Employee ${index + 1}: ${item.name}</h3>`
    }).join('');

    console.log(database);
});

updateButton.addEventListener('click', () => {
    if (database.length === 0) {
        alert('No Employees To Modify, Please Create Some Employees First');
        return;
    }

    const name = prompt('Enter The Name Of The Employee You Want To Modify', database[Math.floor(Math.random() * database.length)].name);
    const newName = prompt('Enter New Name Of Employee', defaultNames[Math.floor(Math.random() * defaultNames.length)]);
    const index = database.findIndex(item => item.name === name);
    database[index].name = newName;
    localStorage.setItem('databaseTest', JSON.stringify(database));
    readButton.click();
});

deleteButton.addEventListener('click', () => {
    if (database.length === 0) {
        alert('No Employees To Delete, Please Create Some Employees First');
        return;
    }

    const name = prompt('Enter The Name Of The Employee You Want To Delete', database[Math.floor(Math.random() * database.length)].name);
    const index = database.findIndex(item => item.name === name);
    name === 'SHAQUILLE' ? alert("You can't delete me, I'm the creator hahaha!!!") : database.splice(index, 1)
    localStorage.setItem('databaseTest', JSON.stringify(database));
    readButton.click();
});

window.onload = () => {
    readButton.click();
}
