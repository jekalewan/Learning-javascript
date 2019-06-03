let money = prompt("Ваш бюджет на месяц?", 3000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-12-12");
   
let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

let s1 =  prompt("Введите обязательную статью расходов в этом месяце", "Учеба"),
    s2 =  prompt("Во сколько обойдется", 1200),
    s3 =  prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
    s4 =  prompt("Во сколько обойдется", 800);
    
    appDate.expenses.s1 = s2;
    appDate.expenses.s3 = s4; ///

alert("Бюджет пользователя на 1 день" + " " + (appDate.budget / 30));