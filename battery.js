//select menu toggler
const header = document.querySelector('header');
const menuToggler = document.querySelector('.menu-toggler');

//run an if statement function that opens navbar on click
menuToggler.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
    } else {
        header.classList.add('open');
    }
})

//create hint show item
const info = document.querySelector('.fa-info-circle');
const hint = document.querySelector('.hint');
// const help = document.querySelector('.help');

info.addEventListener('click', () => {
    hint.style.visibility = "visible";
    // help.style.display = "none"
    show(20);
});

let count = 0;
function show(time) {
     count = setInterval(timer, 1000)
    function timer() {
        time--
        if (time < 0) {
            hint.style.visibility = "hidden";
            clearInterval(count);
        }
    }
    
};

//create a show help function
// window.addEventListener('load', () => {
//     showHelp(30);
// });
// let showHelpCount = 0;
// function showHelp(time) {
//     showHelpCount = setInterval(showCount, 1000)
//     function showCount() {
//         time--
//         if (time < 20) {
//             help.style.display = "block";
//         }
//         if (time < 0) {
//             help.style.display = "none";
//             clearInterval(showHelpCount)
//         }
//     }
// };



//the logic and algorithm for calculating the battery

//bring in dom content
const inputTotalCapacity = document.getElementById('input-capacity');
const inputMonth = document.getElementById('input-months');
const inputYear = document.getElementById('input-year');
const submitBtn = document.querySelector('.submit-btn');
const showOutputBox = document.querySelector('.output-test');
const form = document.querySelector('form');
let outputCapacity = document.getElementById('output-capacity');
let outputRemaining = document.getElementById('output-remaining');
let outputUsedTotal = document.getElementById('output-used-total');
let outputTotalDay = document.getElementById('output-used-per-day');


//create full battery life
let fullBatteryCapacity = [];

//create how many months user has use the phone
let totalMonthsUsed = [];

//create used year if months is not present
let totalYearUsed = [];


//create output result on submit btn
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    //push in user details to the array
    fullBatteryCapacity.push(parseInt(inputTotalCapacity.value))
    
    totalMonthsUsed.push(inputMonth.value * 30.5)
    
    totalYearUsed.push(inputYear.value * 366)

    //create remaining battery life
    const remainingBatteryCapacity = fullBatteryCapacity - totalMonthsUsed * 2;
    const remainingBatteryCapacityTwo = fullBatteryCapacity - totalYearUsed * 2;
    
    //check if inputs is not empty
            if (totalMonthsUsed != "0" ) {
                // determine remaining battery power
                if (fullBatteryCapacity != remainingBatteryCapacity) {

                    const remainingBatteryLife = remainingBatteryCapacity % fullBatteryCapacity;

                    //pass in calaculated battery test into the document
                    outputCapacity.innerText = `${fullBatteryCapacity} mAh`;

                    //calculate what was lost both in days and pass it into the document
                    let lostBatteryLife = remainingBatteryLife - fullBatteryCapacity;
                    outputTotalDay.innerText = `${totalMonthsUsed} days`;

                    // determine if the user battery has finished then set battery remainder back to 0
                    if (remainingBatteryLife < 0) {
                        outputRemaining.innerText = `${0} mAh`;
                        outputUsedTotal.innerText = `${fullBatteryCapacity} mAh`;
                    } else {
                        outputRemaining.innerText = `${remainingBatteryLife} mAh`;
                        outputUsedTotal.innerText = `${lostBatteryLife} mAh`;
                    }
                    
                
                }
            } else if(totalMonthsUsed = "0" ){
                if (fullBatteryCapacity != remainingBatteryCapacityTwo) {
                    const remainingBatteryLife = remainingBatteryCapacityTwo % fullBatteryCapacity;

                    //pass in calaculated battery test into the document
                    outputCapacity.innerText = `${fullBatteryCapacity} mAh`;


                    //calculate what was lost both in days and pass it into the document
                    let lostBatteryLife = remainingBatteryLife - fullBatteryCapacity;
                    outputTotalDay.innerText = `${totalYearUsed} days`;
                    
                    // determine if the user battery has finished then set battery remainder back to 0
                    if (remainingBatteryLife < 0 ) {
                        outputRemaining.innerText = `${0} mAh`;
                        outputUsedTotal.innerText = `${fullBatteryCapacity} mAh`;
                    } else {
                        outputUsedTotal.innerText = `${lostBatteryLife} mAh`;
                        outputRemaining.innerText = `${remainingBatteryLife} mAh`;
                    }
                
                }
            }

    form.classList.add('load');
    showOutBox(3);
    inputTotalCapacity.value = "";
    inputMonth.value = "";
    inputYear.value = ""

});

//initialte loading delay before showing output box
let countDown = 0;
const showOutBox = (time) => {
    countDown = setInterval(timer, 1000);
    function timer() {
        time--
        if (time < 0) {
            showOutputBox.style.display = "block";
            form.classList.remove('load');
            clearInterval(countDown);
        }
    }
}
