function TenDayList(mm, dd) {
    // current day
    let countDays = dd;
    // if countDown is less > 1 it triggers backOneMonth
    let backOneMonth = true;
    // returning array value
    let countList = [];

    let lastMonthCheck = { month: mm, day: '' };

    for (let index = 1; index <= 9; index++) {

        if (countDays > 1) {
            --countDays;
            // months with: 31
        } else if ((mm === '01' || mm === '03' || mm === '05' || mm === '07' || mm === '08' || mm === '10') && (backOneMonth === true)) {
            countDays = 32;
            backOneMonth = false;
            lastMonthCheck.month = --mm;
            // months with: 30
        } else if ((mm === '04' || mm === '06' || mm === '09' || mm === '11') && (backOneMonth === true)) {
            countDays = 31;
            backOneMonth = false;
            lastMonthCheck.month = --mm;
            // month: 29
        } else if ((mm === '02') && (backOneMonth === true)) {
            countDays = 29;
            backOneMonth = false;
            lastMonthCheck.month = --mm;
        }

        countList.push(countDays);
    }

    lastMonthCheck.day = countDays;

    return lastMonthCheck;
 
}

export default TenDayList;