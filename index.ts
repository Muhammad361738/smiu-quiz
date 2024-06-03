import inquirer from "inquirer"
 // Create an object and pass 5 keys values of string
const quiz :{
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
// use inquirer and ask 5 question from user and give choices
} = await inquirer.prompt([
    // Question 1
    {
        name : "question_1",
        type : "list",
        message:"Q1. What is the correct way to check if two values are not equal in Type Script ?",
        choices : ["a==b","a===b","a=b","a!==b"]
    },
    // Question 2
    {
        name : "question_2",
        type : "list",
        message:"Q2 .Which of the following characters is commonly allowed in variable names in Type Script ?",
        choices : ["$","@","#","&"]
    },
    // Question 3
    {
        name : "question_3",
        type : "list",
        message:"Q3. Which operator is commanly used for string concatenation in type Script ?",
        choices : ["+","-","*","/"]
    },
    // Question 4
    {
        name : "question_4",
        type : "list",
        message:"Q4. In Type Script , which Symbol is commanly used to terminate a statement  ?",
        choices : [".",":",";",","]
    },
    // Question 5 
    {
        name : "question_5",
        type : "list",
        message:"Q5. Which method of inquirer.js is to start the prompt interface and receive user input ?",
        choices : ["start()","prompt()","init()","run()"]
    }
]);
// make an variable which value is 0 when user give correct answer then its value is increase 
let score : number = 0;
// use switch case which check the correct answer 
switch (quiz.question_1){
    case "a!==b":// if answer is correct then correct is print 
        console.log("1. Correct ")
        ++score;// and score is increase 
        break;// and statement is break and go to check next statement 
        default:
            // if user give wrong answer then print incorrect
            console.log("1. Incorrect ")
}
// use switch case which check the correct answer
switch (quiz.question_2){
    case "$":// if answer is correct then correct is print 
        console.log("2. Correct ")
        ++score;// and score is increase 
        break;// and statement is break and go to check next statement
        default:
            // if user give wrong answer then print incorrect
            console.log("2. Incorrect ")
}
// use switch case which check the correct answer
switch (quiz.question_3){
    case "+":// if answer is correct then correct is print 
        console.log("3. Correct ")
        ++score;// and score is increase 
        break;// and statement is break and go to check next statement
        default:
            // if user give wrong answer then print incorrect
            console.log("3. Incorrect ")
}
// use switch case which check the correct answer
switch (quiz.question_4){
    case ";":// if answer is correct then correct is print 
        console.log("4. Correct ")
        ++score;// and score is increase 
        break;// and statement is break and go to check next statement
        default:
            // if user give wrong answer then print incorrect
            console.log("4. Incorrect ")
}
// use switch case which check the correct answer
switch (quiz.question_5){
    case "prompt()":// if answer is correct then correct is print 
        console.log("5. Correct ")
        ++score;// and score is increase 
        break;// and statement is break and go to check next statement
        default:
            // if user give wrong answer then print incorrect
            console.log("5. Incorrect ")
}
// to see all over score 
console.log(`Score : ${score}`)