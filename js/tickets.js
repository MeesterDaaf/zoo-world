/* current prices */
var day_price = 11.50;
var child_price = 5.50;
var total_child = 0.00;
var total_day = 0.00;
document.getElementsByClassName('daily_current_price')[0].innerHTML = day_price.toFixed(2).toString().replace(".", ",");
document.getElementsByClassName('daily_current_price')[1].innerHTML = day_price.toFixed(2).toString().replace(".", ",");
document.getElementsByClassName('child_current_price')[0].innerHTML = child_price.toFixed(2).toString().replace(".", ",");
document.getElementsByClassName('child_current_price')[1].innerHTML = child_price.toFixed(2).toString().replace(".", ",");


function add_pass(pass_type) {

    var ticket_element = pass_type.previousElementSibling.id;
    var current_value = document.getElementById(ticket_element).value;
    var new_value = Number(current_value) + 1;
    document.getElementById(ticket_element).value = new_value;

    if (ticket_element == "amount_day_pass") {
        total_day = parseFloat(Math.round(new_value * day_price * 100) / 100).toFixed(2);
        document.getElementById('aantal_dag_kaarten').innerHTML = new_value;
        document.getElementById('totaal_prijs_dag').innerHTML = total_day.replace(".", ",");
    }
    if (ticket_element == "amount_peuter_pass") {
        total_child = parseFloat(Math.round(new_value * child_price * 100) / 100).toFixed(2);

        document.getElementById('aantal_peuter_kaarten').innerHTML = new_value;
        document.getElementById('totaal_prijs_peuter').innerHTML = total_child.replace(".", ",");
    }

    calculate_basket_price(total_day, total_child);
}

function remove_pass(pass_type) {
    var ticket_element = pass_type.nextElementSibling.id;
    var current_value = document.getElementById(ticket_element).value;
    var new_value = Number(current_value) - 1;
    if (new_value < 0) {
        new_value = 0;
    }
    document.getElementById(ticket_element).value = new_value;

    if (ticket_element == "amount_day_pass") {
        total_day = parseFloat(Math.round(new_value * day_price * 100) / 100).toFixed(2);
        document.getElementById('aantal_dag_kaarten').innerHTML = new_value;
        document.getElementById('totaal_prijs_dag').innerHTML = total_day.replace(".", ",");
    }
    if (ticket_element == "amount_peuter_pass") {
        total_child = parseFloat(Math.round(new_value * child_price * 100) / 100).toFixed(2);

        document.getElementById('aantal_peuter_kaarten').innerHTML = new_value;
        document.getElementById('totaal_prijs_peuter').innerHTML = total_child.replace(".", ",");
    }

    calculate_basket_price(total_day, total_child);
}

function calculate_basket_price(total_day, total_child) {
    var total_basket = (parseFloat(total_day) + parseFloat(total_child)).toFixed(2);
    document.getElementById('totaal_prijs').innerHTML = total_basket.replace(".", ",");
}