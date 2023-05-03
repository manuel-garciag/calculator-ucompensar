'use strict'

/** Initialize var result */
var result;
localStorage.setItem('optionCal', 0)

/**
 * Function detect button selected and option to realise
 * @param {string|int} value Button selected
 * @param {option} option Option to realise
 */
function setValue(value, option) {
    console.log(value);
    console.log(option);

    switch (option) {
        case 1:
            /** Save operator */
            localStorage.setItem('optionCal', 1);
            /** Detect Num */
            let elemNumber = document.getElementById('text_calc');
            elemNumber.innerHTML += value;

            break;
        case 2:
            /** Validate first option is operator */
            if (localStorage.getItem('optionCal') == '0') {
                value = "0" + value; 
            }

            /** Save operator */
            localStorage.setItem('optionCal', 2);

            if (value != '=') {
                let elemCalc = document.getElementById('text_calc');
                elemCalc.innerHTML += value;    
                return;
            }

            let getData = document.getElementById('text_calc');
            let saveResult = document.getElementById('result');
            saveResult.innerHTML = getData;

            break;
        default:
            alert('Ocurrió algo inesperado, por favor recargue e intente nuevamente.')
            break;
    }

}

/**
 * Clean all screen
 */
function cleanAll() {
    let docTextCalc = document.getElementById('text_calc');
    docTextCalc.innerHTML = "";

    /*let saveResult = document.getElementById('result');
    saveResult.innerHTML = 0;*/

    localStorage.setItem('optionCal', 0)
}

/** 
 * Delete last item 
 */
function deleteLast() {
    console.log('entro2');
}