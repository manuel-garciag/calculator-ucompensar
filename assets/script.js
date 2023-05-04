'use strict'

/** Initialize var save result, prevNum and status*/
var prevNum;
var result;
localStorage.setItem('optionCal', 0)

/**
 * Function detect button selected and option to realise
 * @param {string|int} value Button selected
 * @param {option} option Option to realise
 */
function setValue(value, option) {
    switch (option) {
        case 1:
            /** Save operator */
            localStorage.setItem('optionCal', 1);
            /** Detect Num */
            let elemNumber = document.getElementById('text_calc');
            elemNumber.innerHTML += value;

            break;

        case 2:
            let elemCalc = document.getElementById('text_calc');

            /** Validate first option is operator */
            if (localStorage.getItem('optionCal') == '0') {
                prevNum = 0;
                value = "0" + value;
            }

            /** Save operator */
            localStorage.setItem('optionCal', 2);

            if (value != '=') {
                prevNum = Number(elemCalc.innerHTML);
                elemCalc.innerHTML += value;
            }

            break;
        default:
            alert('Ocurrió algo inesperado, por favor recargue e intente nuevamente.')
            break;
    }

}

/** 
 * Get result
 */
function getResult(){

    var elemCalc = document.getElementById('text_calc');

    if (prevNum === null) {
        let currNum = Number(elemCalc.innerHTML);
        let saveResult = document.getElementById('result');
        saveResult.innerHTML = currNum;
        prevNum = null;
        localStorage.setItem('optionCal', 0);
        elemCalc.innerHTML = "";
        return
    }

    let currExpr = elemCalc.innerHTML;
    let currNum = eval(currExpr);
    let saveResult = document.getElementById('result');
    saveResult.innerHTML = currNum;
    prevNum = null;
    localStorage.setItem('optionCal', 0);
    elemCalc.innerHTML = "";

}

/**
 * Clean all screen
 */
function cleanAll() {
    let docTextCalc = document.getElementById('text_calc');
    docTextCalc.innerHTML = "";

    let saveResult = document.getElementById('result');
    saveResult.innerHTML = "";

    localStorage.setItem('optionCal', 0)
}

/** 
 * Delete last item 
 */
function deleteLast() {
    console.log('entro2');
}