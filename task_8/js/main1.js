let buttonStart = document.getElementById('start');
let resultValues = document.querySelectorAll('.result-table [class$="value"]');

let expensesItems = document.querySelectorAll('.expenses-item');
let expensesOptItems = document.querySelectorAll('.optionalexpenses-item');

let dataBlock = document.querySelector('.data');
let buttonsExpenses = dataBlock.getElementsByTagName('button');
let toApproveExpenses = buttonsExpenses[0];
let toApproveExpensesOpt = buttonsExpenses[1];
let toCalcExpenses = buttonsExpenses[2];

let incomes = document.querySelector('.choose-income'); //возможный доход через запятую
let savings = document.querySelector('#savings'); //чекбокс накопления
let savingsSum = document.querySelector('#sum');
let savingsPercent = document.querySelector('#percent');

let year = document.querySelector('.time-data .year-value');
let month = document.querySelector('.time-data .month-value');
let day = document.querySelector('.time-data .day-value');
