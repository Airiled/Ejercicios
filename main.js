//URL de la API
const URL = 'https://jsonplaceholder.typicode.com/users';

//Relacionamos variables con etiquetas para poder manipular el DOM
const table = document.querySelector('#initialTable');
const divTable = document.querySelector('#list');
const tableContainer = document.querySelector('#table-container');

const createUser = document.querySelector('#userCreation');

function createUserRow(users){
    //Creamos las filas mediante los datos de la API o de los valores introducidos por el usuario
    users.forEach(user => {
        const tdCompany = document.createElement('td');
        tdCompany.classList.add('tittleColumn');
        tdCompany.innerHTML = user.company.name;

        const tdPhone = document.createElement('td');
        tdPhone.classList.add('tittleColumn');
        tdPhone.innerHTML = user.phone;

        const tdAddres = document.createElement('td');
        tdAddres.classList.add('tittleColumn');
        tdAddres.innerHTML = user.address.street;

        const tdEmail = document.createElement('td');
        tdEmail.classList.add('tittleColumn');
        tdEmail.innerHTML = user.email;

        const tdId = document.createElement('td');
        tdId.classList.add('tittleColumn');
        tdId.innerHTML = user.id;

        const trData = document.createElement('tr');

        trData.append(tdId, tdEmail, tdAddres, tdPhone, tdCompany);
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
        id: prompt('Ingrese su id: '),
        email: prompt('Ingrese su email: '),
        address:{
            street: prompt('Ingrese su direccion: '),
        },
        phone: prompt('Ingrese su telefono: '),
        company:{
            name: prompt('Ingrese el nombre de su compania: '),
        },
    }];
    
    createUserRow(user);
}

getUsersData();