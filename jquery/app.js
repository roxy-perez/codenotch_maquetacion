
let prendas = [];

/**
 *  ++++ Funciones ++++
**/

function showModal() {
    $('#my-modal').modal({
        show: true
    });
}

function addPrendas(prenda) {
    prendas.push(prenda);
}

function getTotal() {
    let sum = 0;
    for (let i = 0; i < prendas.length; i++) {
        let toInt = parseFloat(prendas[i].price);
        sum += toInt;
    }

    $("#total").text(sum.toFixed(2) + '€');
}

function paintList() {
    let modalUl = $('#body-ul');
    let list = "";
    for (let i = 0; i < prendas.length; i++) {
        list += "<li>" + "PRENDA :: " + prendas[i].name + " ::: " + prendas[i].price + "</li>";
    }
    modalUl.html(list);
}

/**
 *  ++++ Eventos ++++
**/

$("#carrito").click((e) => {
    e.preventDefault();
    showModal();
    paintList();
    getTotal();
});

$('#comprar').click((e) => {
    e.preventDefault();
    alert('¡A pagar nena!');
});

$("#article1").on("click", () => {
    let name = $("#art1").val();
    let price = $("#price1").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article2").on("click", () => {
    let name = $("#art2").val();
    let price = $("#price2").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article3").on("click", () => {
    let name = $("#art3").val();
    let price = $("#price3").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article4").on("click", () => {
    let name = $("#art4").val();
    let price = $("#price4").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article5").on("click", () => {
    let name = $("#art5").val();
    let price = $("#price5").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article6").on("click", () => {
    let name = $("#art6").val();
    let price = $("#price6").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article7").on("click", () => {
    let name = $("#art7").val();
    let price = $("#price7").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});

$("#article8").on("click", () => {
    let name = $("#art8").val();
    let price = $("#price8").val();
    let art = {};
    art.name = name;
    art.price = price;

    addPrendas(art);
});





