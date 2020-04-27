"use strict";

let money = +prompt("Ваш бюджет на месяц?", '25000');
let time = prompt("Введите дату в формате YYYY-MM-DD", '2020-06-24');
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a)!= null) && (typeof(b)!= null) && (a != '') && (b != '') && a.length < 50) {
        appData.expenses[a]= b;
    } else {
        console.log('ups');
    }
} 
/*let a,b, i=0;
 while (i < 2){
    a = prompt("Введите обязательную статью расходов в этом месяце", '');
    b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a)!= null) && (typeof(b)!= null) && (a != '') && (b != '') && a.length < 50) {
        appData.expenses[a]= b;
    }
    i++;
} */
/* do {
    a = prompt("Введите обязательную статью расходов в этом месяце", '');
    b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a)!= null) && (typeof(b)!= null) && (a != '') && (b != '') && a.length < 50) {
        appData.expenses[a]= b;
    }
} while (i < 2); */



appData.moneyPerDay = (appData.moneyData /30);
let aDay = appData.moneyPerDay;
alert(`В день  ${ aDay } `);
console.log(appData);
if (aDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (aDay > 100 && aDay < 2000) {
    console.log("Средний уровень достатка");
} else if (aDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
    
