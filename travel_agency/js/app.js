const submit = document.getElementById("submit");
const filter = document.getElementById("search");

const name = document.getElementById("name");
const origin = document.getElementById("origin");
const destination = document.getElementById("destination");
const nPeople = document.getElementById("nPeople");
const date = document.getElementById("date");

let arrDataForm = [];

function clearInputs() {
    name.value = "";
    origin.value = "";
    destination.value = "";
    nPeople.value = "";
    date.value = "";
}

const saveDataForm = (event) => {
    event.preventDefault(); //Evitamos el comportamiento por defecto

    let _name = name.value;
    let _origin = origin.value;
    let _destination = destination.value.toString();
    let _nPeople = nPeople.value;
    let _date = date.value;

    let data = {
        name: _name,
        origin: _origin,
        destination: _destination,
        nPeople: _nPeople,
        date: _date
    }

    arrDataForm.push(data);
    clearInputs();
    console.log(arrDataForm)

}

const isCommunity = city => city.destination.toLowerCase() === 'Canarias'.toLowerCase()
    || city.destination.toLowerCase() === 'Mallorca'.toLocaleLowerCase()
    || city.destination.toLowerCase() === 'Galicia'.toLowerCase();


const showDataFilter = (event) => {
    event.preventDefault();

    let result = arrDataForm.filter(isCommunity);
    let list = document.getElementById("list");
    list.innerHTML = `<tr>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Number of People</th>
                        <th>Departure date</th>
                     </tr>
                     `
    for (var i = 0; i < result.length; i++) {
        list.innerHTML += `
        <tr>
            <td>${result[i].name.toUpperCase()}</td>
            <td>${result[i].origin.toUpperCase()}</td>
            <td>${result[i].destination.toUpperCase()}</td>
            <td>${result[i].nPeople.toUpperCase()}</td>
            <td>${result[i].date.toUpperCase()}</td>
         </tr>`
    };
}

function clean() {
    let list = document.getElementById("list");
    list.innerHTML = `<tr>
                            <th>Name</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Number of People</th>
                            <th>Departure date</th>
                        </tr>
 
        <tr>
            <td>Name</td>
            <td>Origin</td>
            <td>Destination</td>
            <td>Number of People</td>
            <td>Departure date</td>
         </tr>`;


}

submit.addEventListener("click", saveDataForm);

filter.addEventListener("click", showDataFilter);

