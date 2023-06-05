
//set variable
let screenTitle = document.querySelector('.atmTitle');
let screenText = document.querySelector('.atmText');
let screenInputScreen = document.querySelector('.atmInputScreen');
let atmCardDiv = document.querySelector('.atmCard');
let whichScreen = "";
let currentBalance = 1000;
let enteredAmount;
let pinGood = false;

// atm card in or out
const atmCard = () => {
    atmCardDiv.innerHTML = "<img class='atmCardPic' src='atmcard2.png'></img>";
    pinScreenNew();
}

//pin screen. this function will show keypad input
const pinScreenNew = (number) => {
    whichScreen = "pin";
    screenText.innerHTML = "Please enter your PIN";
    screenInputScreen.innerHTML = "HINT: 1234";
      
}

const pinScreen = (number) => {
    whichScreen = "pin";
    screenText.innerHTML = "Please enter your PIN";
      
}

const pin = (num) => {
    if (num==="1234"){
        
        //set menu text
        document.getElementById("home").innerHTML = "-----> Home";
        document.getElementById("balance").innerHTML = "-----> Balance";
        document.getElementById("withdraw").innerHTML = "Withdraw <-----";
        document.getElementById("deposit").innerHTML = "Deposit <-----";
        document.getElementById("finished").innerHTML = "Finished <-----";
        pinGood = true;
        homeScreen();

    } else {
        screenInputScreen.innerHTML = "Invalid PIN";
    }
}

// homescreen
const homeScreen = () => {
    if (pinGood){
       whichScreen = "home";
    screenTitle.innerHTML = "BANK OF PER SCHOLAS";
    screenText.innerHTML = "Please select a menu item";
    screenInputScreen.innerHTML = ""; 
    }
    
}

//balance screen
const balanceScreen = () => {
    if (pinGood){
    whichScreen = "balance";
    screenTitle.innerHTML = "BALANCE";
    screenText.innerHTML = "Your current balance is:";
    screenInputScreen.innerHTML = "$" + currentBalance;
    }
}

//withdraw screen sets screen input to blank
const withdrawScreenNew = () => {
    if (pinGood){
    whichScreen = "withdraw";
    screenTitle.innerHTML = "WITHDRAW";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to withdraw?</p>"; 
    screenInputScreen.innerHTML = ""; 
    }
}

//withdraw screen. this function will show keypad input
const withdrawScreen = (number) => {
    if (pinGood){
    whichScreen = "withdraw";
    screenTitle.innerHTML = "WITHDRAW";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to withdraw?</p>";  
    }
}

//deposit screen sets screen input to blank
const depositScreenNew = () => {
    if (pinGood){
    whichScreen = "deposit";
    screenTitle.innerHTML = "DEPOSIT";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to deposit?</p>";
    screenInputScreen.innerHTML = "";
    }
}

//deposit screen. this function will show keypad input
const depositScreen = (number) => {
    if (pinGood){
    whichScreen = "deposit";
    screenTitle.innerHTML = "DEPOSIT";
    screenText.innerHTML = "Your current balance is: $" + currentBalance + "<p> How much would you like to deposit?</p>";
    }
    
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
     else if (whichScreen==="pin"){
        pinScreen(number); 
        if (screenInputScreen.innerHTML === "HINT: 1234" || screenInputScreen.innerHTML==="Invalid PIN"){
            clearInputScreen();
        }
     } 
    
     // checks to see if we are on only withdraw or deposit to be able to use keypad
     if (whichScreen==="withdraw" || whichScreen==="deposit" || whichScreen==="pin") {
        
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
        else if (whichScreen==="pin"){
            pin(enteredAmount); 
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

// finished
const finished = () => {
    if (pinGood){
       whichScreen = "";
       atmCardDiv.innerHTML = "<img class='atmCardPic' src='atmcard.png' onclick='atmCard()''></img>";
    screenTitle.innerHTML = "BANK OF PER SCHOLAS";
    screenText.innerHTML = "Please insert your card";
    screenInputScreen.innerHTML = ""; 
    document.getElementById("home").innerHTML = "----->";
    document.getElementById("balance").innerHTML = "----->";
    document.getElementById("withdraw").innerHTML = "<-----";
    document.getElementById("deposit").innerHTML = "<-----";
    document.getElementById("finished").innerHTML = "<-----";
    
    pinGood = false;
    }
}
