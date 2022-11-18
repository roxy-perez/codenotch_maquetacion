const submit = document.getElementById("submit");

const getFormData = () => {
    const form = document.querySelector('#travel-form');
    return new FormData(form);
}

const toJson = function (event) {
    const formData = getFormData();
    event.preventDefault();
    let object = {};
    let arrForm = [];
    formData.forEach((value, key) => {
        if (value != undefined) {
            object[key] = value;
        }
    });

    let json = JSON.stringify(object);
    arrForm.push(json);
    console.log(arrForm);
};

submit.addEventListener("click", toJson);
