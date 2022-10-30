const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./util/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const members = [];

function askMembers(){
    inquirer.prompt([
        {    
            type:'list',
            name:'employeeLevel',
            choices:['Manager', 'Engineer', 'Intern', 'Finish'],
            message:'Which level of employee so you want to add to your team?'
        }]) 
        .then(({employeeLevel}) =>{
            if(employeeLevel === 'Manager'){
                createManager();
            } else if (employeeLevel === 'Engineer'){
                createEngineer();
            } else if (employeeLevel === 'Intern'){
                createIntern();
            } else if (employeeLevel === 'Finish'){
                createHtml();
            }
})}

function createManager(){
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

    .then((answerMgr)=> {
    const newManager = new Manager(answerMgr.name, answerMgr.id, answerMgr.email, answerMgr.officeNumber) 
    members.push(newManager);

    askMembers();
})}

// ask questions about engineer

function createEngineer(){
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
     members.push(newEngineer);

        askMembers();
});
}

// ask questions about intern

function createIntern(){
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
     members.push(newIntern);

        askMembers();
});
}

function createHtml(){
    const html = info
    fs.writeFile('./dist/index.html',html, (err) =>{
        err ? console.log(err): console.log('HTML is created.')
    }

)};


    
    








