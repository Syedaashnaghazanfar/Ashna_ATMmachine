#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let pinCode = 2007;
let  myBalance = 45000;

console.log(chalk.bgGreenBright(" ^^^ Welcome to Ashna Ghazanfar's ATM machine ^^^ "));

let message1= await inquirer.prompt([
    {
        name : 'correctpin',
        type: "number",
        message :"Enter your pin code"
    }
])
if(message1.correctpin === pinCode){
    console.log(chalk.blue("Pin id correct! LOGIN SUCCESSFUL"));
    let message2 = await inquirer.prompt([
        {
            name : "operationOnBalance",
            type :"list",
            message :"Select one of the following operations",
            choices:[{value:"Widhdraw"},{value :"Deposit"},{value:"Check Balance"}]
        }
    ]);
    if(message2.operationOnBalance === "Widhdraw"){
        let message3 = await inquirer.prompt([
            {
                name : "widhdrawalAmount",
                type:"number",
                message:"Enter the amount you want to withdraw"
            }
        ]);
        if(message3.widhdrawalAmount>myBalance){
            console.log(chalk.red("Your current balance is insufficient"))
        }
        else{
            myBalance-= message3.widhdrawalAmount;
            console.log(chalk.blue(`${message3.widhdrawalAmount} withdrawed from your account balance`));
            console.log(chalk.greenBright(`Balance remaining : ${myBalance}`))
        }
    }
    else if (message2.operationOnBalance === "Deposit"){
        let message4 = await inquirer.prompt([
            {
                name :"depositedAmount",
                type :"number",
                message:"Enter the amount you want to deposit"
                
            }
        ]);
        if(message4.depositedAmount>myBalance){
            console.log(chalk.red(`Your deposited amount must be less than ${myBalance}` ))
        }
        else{
            myBalance += message4.depositedAmount;
            console.log(chalk.blue(`${message4.depositedAmount} successfully deposited into your account balance`));
            console.log(chalk.greenBright(`Balance remaining : ${myBalance}`))
        }
    }
    else if (message2.operationOnBalance === "Check Balance"){
        console.log(chalk.blue(`Your current account balance is ${myBalance}`))
    }
}
else {console.log(chalk.redBright("Your pin is incorrect! TRY AGAIN"))};
