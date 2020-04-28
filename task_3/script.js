"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '25000');
    time = prompt("Введите дату в формате YYYY-MM-DD", '2020-06-24');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '25000'); 
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof(a) === 'string') && (typeof(a)!= null) && (typeof(b)!= null) && (a != '') && (b != '') && a.length < 50) {
            appData.expenses[a]= b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = +prompt(`Статья необязательных расходов? (${i})`, '');
        if ((typeof(a)!= null) && (a != '') && !isNaN(a)) {
            appData.optionalExpenses[i]= a;
        } else {
            i = i - 1;
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget /30).toFixed();
    alert(`В день  ${ appData.moneyPerDay } `);
}
detectDayBudget();

function detectLevel() {
    let aDay = appData.moneyPerDay;
    if (aDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (aDay > 100 && aDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (aDay > 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений", ""),
        percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
    }
}
checkSavings();
console.log(appData);