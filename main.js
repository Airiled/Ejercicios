//URL de la API
const URL = 'https://jsonplaceholder.typicode.com/users';

const table = document.querySelector('#initialTable');
const divTable = document.querySelector('#divTable');
const tableContainer = document.querySelector('#table-container');

// ----

function createUserRow(users){
    //Creamos las filas mediante los datos de la API o de los valores introducidos por el usuario
    users.forEach(user => {

        const tdName = document.createElement('td');
        tdName.classList.add('columnData');
        tdName.innerHTML = user.name;

        const tdUsername = document.createElement('td');
        tdUsername.classList.add('columnData');
        tdUsername.innerHTML = user.username;

        const tdEmail = document.createElement('td');
        tdEmail.classList.add('columnData');
        tdEmail.innerHTML = user.email;

        const tdPhone = document.createElement('td');
        tdPhone.classList.add('columnData');
        tdPhone.innerHTML = user.phone;

        const tdWeb = document.createElement('td');
        tdWeb.classList.add('columnData');
        tdWeb.innerHTML = user.website;

        const trData = document.createElement('tr');

        trData.append(tdName, tdUsername, tdEmail, tdPhone, tdWeb);
        table.append(trData);
        divTable.append(table);
        tableContainer.append(divTable);
    });

}

async function getUsersData(){
    //Obtenemos los valores de la API
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const users = data;

    createUserRow(users);
}

function createNewUser(){
    //Creamos un array que contenga un objeto para poder hacer funcionar el forEach a la hora de querer crear la fila del nuevo usuario
    const user = [{
        name: prompt('Name: '),
        username: prompt('Username: '),
        email: prompt('Email: '),
        phone: prompt('Phone: '),
        website: prompt('Website:'),
    }];
    
    createUserRow(user);
}

getUsersData();