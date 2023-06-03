
//set variable
let screenTitle = document.querySelector('.atmTitle');
let screenText = document.querySelector('.atmText');
let screenInputScreen = document.querySelector('.atmInputScreen');
let whichScreen = "";
let currentBalance = 1000;
let enteredAmount;

// homescreen
const homeScreen = () => {
    whichScreen = "home";
    screenTitle.innerHTML = "BANK OF PER SCHOLAS";
    screenText.innerHTML = "Please select a menu item";
    screenInputScreen.innerHTML = "";
}

//balance screen
const balanceScreen = () => {
    whichScreen = "balance";
    screenTitle.innerHTML = "BALANCE";
    screenText.innerHTML = "Your current balance is:";
    screenInputScreen.innerHTML = "$" + currentBalance;
}

//withdraw screen sets screen input to blank
const withdrawScreenNew = () => {
    whichScreen = "withdraw";
    screenTitle.innerHTML = "WITHDRAW";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to withdraw?</p>"; 
    screenInputScreen.innerHTML = ""; 
}

//withdraw screen. this function will show keypad input
const withdrawScreen = (number) => {
    whichScreen = "withdraw";
    screenTitle.innerHTML = "WITHDRAW";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to withdraw?</p>";  
}

//deposit screen sets screen input to blank
const depositScreenNew = () => {
    whichScreen = "deposit";
    screenTitle.innerHTML = "DEPOSIT";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to deposit?</p>";
    screenInputScreen.innerHTML = "";
}

//deposit screen. this function will show keypad input
const depositScreen = (number) => {
    whichScreen = "deposit";
    screenTitle.innerHTML = "DEPOSIT";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to deposit?</p>";
    
}

//checks which screen we are on and inputs to the input screen if applicable
const uploadToScreen = (number) => {

    // checks which screen we are on using whichScreen variable
    if (whichScreen==="withdraw"){
       withdrawScreen(number); 
    } 
    else if (whichScreen==="deposit"){
        depositScreen(number); 
     } 
    
     // checks to see if we are on only withdraw or deposit to be able to use keypad
     if (whichScreen==="withdraw" || whichScreen==="deposit") {
        
        //appends new number per button press
        screenInputScreen.append(number);
     }
}

//clears input screen
const clearInputScreen = () => {
    screenInputScreen.innerHTML = "";
}

//adds or subtracts from balance depending on which screen you are on
const enterButton = () => {

    //gets the input from the input screen if not null
    if (screenInputScreen.innerHTML!=""){
        enteredAmount = screenInputScreen.innerHTML;
    
        // checks which screen we are on using whichScreen variable
        if (whichScreen==="withdraw"){
            withdraw(enteredAmount); 
        } 
        else if (whichScreen==="deposit"){
            deposit(enteredAmount); 
        }
    }   
}

//calculates and displays totals for withdraws
const withdraw = (number) => {

    let testBalance = currentBalance;

    testBalance -= parseInt(number);


    if (testBalance >= 0){
        console.log(testBalance);
    currentBalance -= parseInt(number);

    }
    else {
        alert("That would overdraw your account.")
    }

    whichScreen = "withdraw";
    screenTitle.innerHTML = "WITHDRAW";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to withdraw?</p>";  
    screenInputScreen.innerHTML = "";
}

//calculates and displays totals for deposits
const deposit = (number) => {
    currentBalance += parseInt(number);

    whichScreen = "deposit";
    screenTitle.innerHTML = "DEPOSIT";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to deposit?</p>";
    screenInputScreen.innerHTML = "";
}

