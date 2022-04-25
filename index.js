let HowManyYearsVegan = (answer) => {
    const years = prompt('How many years have you been vegan?')
    console.log(years)
    if (answer > 5) {
        console.log(answer + "Amazing! We hope you can discover somewhere new today, please explore");
    } else {
        console.log(answer + "Thats great, hopefully we can show you somewhere some great new places to try");
    }
};
HowManyYearsVegan()

