console.log('hola');

const URL = 'https://jsonplaceholder.typicode.com/users';

const table = document.querySelector('#initialTable');
const divTable = document.querySelector('#list');
const tableContainer = document.querySelector('#table-container');

async function getUsersData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(res);
    console.log(data);
    const users = data;

    // console.log('probando');
    // console.log(data[0].address.street);

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

getUsersData();