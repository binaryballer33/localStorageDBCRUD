let database = [];
const defaultNames = ['LEBRON', 'JORDAN', 'KAREEM', 'WILT', 'BILL', 'MAGIC', 'BIRD', 'KOBE', 'SHAQ', 'AI', 'RAY', 'CURRY', 'KEVIN', 'KAWHI', 'GIANNIS', 'MELO', 'STOCKTON', 'MALONE', 'RONDO', 'DWIGHT', 'DUNCAN', 'SHAQUILLE_THE_CREATOR', 'DROSE', 'WESTBROOK', 'CP3', 'PIPPEN', 'EMBID', 'JOKER', 'MURRAY', 'HARDEN', 'KYRIE', 'AI', 'KLAY', 'DRAYMOND', 'BARKLEY', 'WEMBY', 'AD', 'ZION', 'JA', 'LILLARD', 'WEBBER', 'KIDD', 'NASH', 'GARNETT', 'LUKA', 'DIRK', 'VINCE', 'T-MAC', 'AGENT0', 'CRAWFORD']
if (localStorage.getItem('databaseTest')) {
    database = JSON.parse(localStorage.getItem('databaseTest'));
}

const employeesDiv = document.getElementById('data');
const createButton = document.getElementById('btnCreate');
const readButton = document.getElementById('btnRead');
const updateButton = document.getElementById('btnUpdate');
const deleteButton = document.getElementById('btnDelete');
const emptyButton = document.getElementById('btnEmpty');
const fillButton = document.getElementById('btnFill');
const generateFiveButton = document.getElementById('btnGenerateFive');

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

emptyButton.addEventListener('click', () => {
    if (database.length === 0) {
        alert('The Database Is Already Empty');
        return;
    }

    const confirm = prompt('Are You Sure You Want To Delete All Employees? (Y/N)', 'N');
    if (confirm.toUpperCase() === 'Y') {
        database = [];
        localStorage.setItem('databaseTest', JSON.stringify(database));
        readButton.click();
    }
});

fillButton.addEventListener('click', () => {
    if (database.length === 0) {
        defaultNames.forEach(name => {
            database.push({ name });
        });
        localStorage.setItem('databaseTest', JSON.stringify(database));
        readButton.click();
    } else {
        alert('Empty The Database First');
    }
});

generateFiveButton.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        database.push({ name: defaultNames[Math.floor(Math.random() * defaultNames.length)] });
    }
    localStorage.setItem('databaseTest', JSON.stringify(database));
    readButton.click();
});

window.onload = () => {
    readButton.click();
}
