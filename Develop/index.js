const inquirer = require('inquirer');
const fs = require('fs');
const internal = require('stream');
const { Module } = require('module');

askQuestions(){

inquirer
.Prompt(
    {
        type:'list',
        name:'employeeLevel',
        choices:['Manager', 'Engineer', 'Intern', 'Finish'],
        message:'Which level of employee so you want to add to your team?'
    }
)
//  ask questions about Manager 
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
this.askQuestions();
});

// ask questions about engineer
} else if (employeeLevel === 'Engineer'){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the name of the engineer?',
        },
        {
            type:'number',
            name:'id',
            message:'What is the ID of the engineer?',
        },
        {
            type:'input',
            name:'email',
            message:'What is the email of the engineer?',
        },
        {
            type:'input',
            name:'github',
            message:'What is the GitHub username of the engineer?',
        }

    ])

.then((answerEgnr)=>{
    const newEngineer = new Engineer(answerEgnr.name, answerEgnr.id, answerEgnr.email, answerEgnr.github); 
    this.askQuestions();
});

// ask questions about intern
} else if (employeeLevel === 'Intern'){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the name of the intern?',
        },
        {
            type:'number',
            name:'id',
            message:'What is the ID of the intern?',
        },
        {
            type:'input',
            name:'email',
            message:'What is the email of the intern?',
        },
        {
            type:'input',
            name:'school',
            message:'What is the name of the school intern goes?',
        }
    ])
.then((answerIntn) =>{
    const newIntern = new internal(answerIntn.name, answerIntn.id, answerIntn.email, answerIntn.school);
    this.askQuestions();
});

}else if (employeeLevel ==='Finish'){
    const html = info
    fs.writeFile('./dist/index.html',html, (err) =>
    err ? throw new error(err);

)}


prompt.askQuestions();

Module.exports = prompt;

