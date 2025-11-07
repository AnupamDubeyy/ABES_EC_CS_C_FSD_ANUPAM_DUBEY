
// const syncFun = () => {
//     for (let i = 0; i <= 900000000000000; i++) {
//         console.log(i);
//     }
// }
const waitForSomeTime = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
        //do nothing
    }
}
const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("Wait has been completed.");
}

const asyncUsingTimer = () => {
    setTimeout(() => {
        console.log("inside setTimeOut");
    }, 4000)
}
console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");
