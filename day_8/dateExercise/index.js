const callbackFun = () => {
    const inputDob = document.getElementById("dob").value;
    const output = document.getElementById("output");

    const currentDate = new Date();
    const userDate = new Date(inputDob);

    const currentDateInYear = currentDate.getFullYear();
    const currentDateInMonth = currentDate.getMonth();

    const userDateInYear = userDate.getFullYear();
    const userDateInMonth = userDate.getMonth();

    let age = currentDateInYear - userDateInYear;
    let ageInMonth = currentDateInMonth - userDateInMonth;
    
    if (currentDateInMonth < userDateInMonth) age--;
    if(ageInMonth <0 ) ageInMonth += 12;

    output.innerText = `User's Age is ${age} Year and ${ageInMonth} Month`;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", callbackFun);