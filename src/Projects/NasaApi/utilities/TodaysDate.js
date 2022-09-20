function TodaysDate() {
    // Getting current date Format:
    // 1. recieve date
    // 2. convert date to format that is desirable => yyyy-mm-dd
    // saving to: ==> today
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    return (today);
}

export default TodaysDate;