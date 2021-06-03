const DOB = document.getElementById("BirthDate");


function generateDay() {
    const Dob = DOB.value;
    const year = parseInt(Dob.slice(0,4));
    const month = parseInt(Dob.slice(5,7));
    const date = parseInt(Dob.slice(8));
    const lastTwoDigitsofYear = parseInt(Dob.slice(2,4));
    const h2 = document.createElement("h2");
    const result = document.createTextNode("Yay!! you were born on " + getDay(date,month,year,lastTwoDigitsofYear));
    h2.appendChild(result);
    document.getElementById("result-container").appendChild(h2);
}


function getYearCode(year)
{
    var yearCode;
    if((year >= 0000 && year <= 99)
        || (year >= 400 && year <= 499)
        || (year >= 800 && year <= 899)
        || (year >= 1200 && year <= 1299)
        || (year >= 1600 && year <= 1699)
        || (year >= 2000 && year <= 2099)
        || (year >= 2400 && year <= 2499))
        {
            yearCode = 6;
        }
        if((year >= 100 && year <= 199)
        || (year >= 500 && year <= 599)
        || (year >= 900 && year <= 999)
        || (year >= 1300 && year <= 1399)
        || (year >= 1700 && year <= 1799)
        || (year >= 2100 && year <= 2199)
        || (year >= 2500 && year <= 2599))
        {
            yearCode = 4;
        }
        if((year >= 200 && year <= 299)
        || (year >= 600 && year <= 699)
        || (year >= 1000 && year <= 1099)
        || (year >= 1400 && year <= 1499)
        || (year >= 1800 && year <= 1899)
        || (year >= 2400 && year <= 2499)
        || (year >= 2800 && year <= 2899))
        {
            yearCode = 2;
        }
        if((year >= 300 && year <= 399)
        || (year >= 700 && year <= 799)
        || (year >= 1100 && year <= 1199)
        || (year >= 1500 && year <= 1599)
        || (year >= 1900 && year <= 1999)
        || (year >= 2300 && year <= 2399)
        || (year >= 2700 && year <= 2799))
        {
            yearCode = 0;
        }

        return yearCode;
}

function getMonthCode(month)
{
    var monthCode;
    switch(month) {
        case 1: monthCode = 1;
                break;
        case 2: monthCode = 4;
                break;
        case 3: monthCode = 4;
                break;
        case 4: monthCode = 0;
                break;
        case 5: monthCode = 2;
                break;
        case 6: monthCode = 5;
                break;
        case 7: monthCode = 0;
                break;
        case 8 : monthCode = 3;
                break;
        case 9 : monthCode = 6;
                break;
        case 10: monthCode = 1
                break;
        case 11: monthCode = 4;
                break;
        case 12: monthCode = 6;
                break;
    }

    return monthCode;
}

function getDay(date,month,year,lastTwoDigitsofYear) {
    const yearCode = getYearCode(year);
    const monthCode = getMonthCode(month);
    // console.log("Date: "+ date + " Month: "+month+ " MonthCode: "+monthCode+ " yearCode: "+yearCode);
    const quotientBy4 = parseInt(lastTwoDigitsofYear / 4);
    const totalDays = date + monthCode + yearCode + lastTwoDigitsofYear + quotientBy4;
    const weekDay = totalDays % 7;
    switch(weekDay)
    {
        case 0: return "Saturday";
                break;
        case 1: return "Sunday";
                break;
        case 2: return "Monday";
                break;
        case 3: return "Tuesday";
                break;
        case 4: return "Wednesday";
                break;
        case 5: return "Thursday";
                break;
        case 6: return "Friday";
                break;
    }
}


