const submit = document.getElementById("submit");
const filter = document.getElementById("search");

const name = document.getElementById("name");
const origin = document.getElementById("origin");
const destination = document.getElementById("destination");
const nPeople = document.getElementById("nPeople");
const date = document.getElementById("date");

function clearInputs() {
    name.value = "";
    origin.value = "";
    destination.value = "";
    nPeople.value = "";
    date.value = "";
}

const saveDataForm =  (event) => {
    event.preventDefault(); //Evitamos el comportamiento por defecto

    let _name = name.value;
    let _origin = origin.value;
    let _destination = destination.value;
    let _nPeople = nPeople.value;
    let _date = date.value;

    let data = {
        name: _name,
        origin: _origin,
        destination: _destination,
        nPeople: _nPeople,
        date: _date
    }

    let arrDataForm = [];
    arrDataForm.push(data);

    clearInputs();


    console.log(arrDataForm)

}

const showDataFilter = (event) => {
    
}

submit.addEventListener("click", saveDataForm);

search.addEventListener("click", showDataFilter);

