"use strict";

let money = prompt("Ваш бюджет на месяц?", '25000');
let time = prompt("Введите дату в формате YYYY-MM-DD", '2020-06-24');
const appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false,
};
let qwest1 = prompt("Введите обязательную статью расходов в этом месяце", 'КУ');
let qwest2 = prompt("Во сколько обойдется?", '5000');
appData.expenses[qwest1]= qwest2;
let aDay = (appData.moneyData - appData.expenses[qwest1])/30;
alert(`В день  ${ aDay } `);
console.log(appData);