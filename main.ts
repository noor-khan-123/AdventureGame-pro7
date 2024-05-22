#! /usr/bin/env node

import inquirer from "inquirer";

console.log("WELCOME MY OWN TRAVEL GAME");

let operationAns = await inquirer.prompt (
    [
        {
            name: "operation",
            message: "Select an option for Travel",
            type: "list",
            choices: ["Mountains", "Forests", "Sea"]
        },
        {
            name: "partners",
            message: "Select partner for travel",
            type: "list",
            choices: ["Huda", "Saadi", "Aima", "Aliyan"],
        }
    ]   
);
// console.log(operationAns);

if(operationAns.operation === "Mountains") {
    let mountainAns = await inquirer.prompt([
        {
            name: "mountains",
            message: "Select a mountain",
            type: "list",
            choices: ["Mount Everest", "Mount Kilimanjaro", "Mount Denali"]
        }
    ]);
} else if (operationAns.operation === "Forests") {
    let mountainAns = await inquirer.prompt([
        {
            name: "forests",
            message: "Select a forest",
            type: "list",
            choices: ["Amazon Rainforest", "Borneo Rainforest", "Tropical Rainforest"],
        }
    ]);
} else {
    let mountainAns = await inquirer.prompt([
        {
            name: "sea",
            message: "Select a sea",
            type: "list",
            choices: ["Pacific Ocean", "Atlantic Ocrean", "Indian Ocean"] 
        }
    ]);
};


let getThings = await inquirer.prompt (
    [
        {
            name: "things",
            message: "What things did you get from that place you visit",
            type: "list",
            choices: ["Photos", "Souvenirs", "Memories", "Treasure"]
        }
    ]
);

let expAns = await inquirer.prompt (
    [
        {
            name: "experience",
            message: "what is your experience from this trip",
            type: "list",
            choices: ["Good", "Bad", "Neutral"],
        }
    ]
);

if(expAns.experience === "Good"){
    console.log("I hope you will come here again");    
} else if (expAns.experience === "Bad"){
    console.log("Tell me the reason of your bad experience. So that we can make it good");
} else {
    console.log("Next time we will try our best to provide you with our best services");
};

console.log('I hope you enjoy this text-based adventure game');


