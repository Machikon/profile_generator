const inquirer = require('inquirer');
const fs = require('fs');

askQuestions(){

inquirer
.Prompt(
    {
        type:'list',
        name:'employeeLevel',
        choices:['Manager', 'Engineer', 'Intern', 'Quit'],
        message:'Which level of employee so you want to add to your team?'
    }
)
.then(({employeeLevel}) =>{
    if(employeeLevel === 'Manager'){
        inquirer.prompt([
            {
                type:'input',
                name:'name',
                message:'What is the name of the manager?',
            },
            {
                type:'number',
                name:'id',
                message:'What is the ID number of the manager?',
            },
            {
                type:'input',
                name:'email',
                message:'What is the email of the manager?',
            },
            {
                type:'input',
                name:'officeNumber',
                message:'What is the Office Phone Number of the manager?',
            }
        ])
    }
})
.then((answerMgr)=> {
const newManager = new Manager(answerMgr.name, answerMgr.id, answerMgr.email, answerMgr.officeNumber) 
this.employeeArray.push(newManager);

this.askQuestions();
}
}