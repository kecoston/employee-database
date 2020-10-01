const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "M@d0wellke",
    database: "employee_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    initialQuestions();
  });

  function initialQuestions() {
    inquirer
        .prompt([
            {
           name: "userChoice",
           type: "list",
           message: "PLEASE SELECT WHICH ACTION YOU WOULD LIKE TO DO",
           choices: [
            "Add a department",
            "Add a role",
            "Add an employee",

            "View the current departments",
            "View the current roles",
            "View the current employees",

            "Update the employee roles",

            "Delete a department",
            "Delete a role",
            "Delete an employee",

            "Exit"
        ]        
    }
])
    .then(function(answer) {
        switch(answer.userChoice) {
        case "Add a department":   
            addDepartment();
            break;

        case "Add a role":
            addRole();
            break;
            
        case "Add an employee":
            addEmployee();
            break;

        case "View the current departments":
            currentDepartments();
            break;

        case "View the current roles":
            currentRoles();
            break;

        case "View the current employees":
            currentEmployees();
            break;

        case "Update the employee roles":
            updateEmplyRole();
            break;

        case "Update employee managers":
            updateEmplyMan();
            break;

        case "View employees by manager":
            viewEmplyMan();
            break;

        case "Delete a department":
            deleteDepart();
            break;

        case "Delete a role":
            deleteRole();
            break;

        case "Delete an employee":
            deleteEmply();
            break;

        case "View current budget for a department":
            viewBudget()
            break;

        case "exit":
            connection.end();
            break;
        }
    })
  }



const addDepartment = () => {
    inquirer
        .prompt ([{
            name: "selectDepartment",
            message: "What department would you like to add?",
            type: "input",
        }])
    .then(function(answer){
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.selectDepartment], (err, data) => {
            if(err) throw err; 
            currentDepartments()
            initialQuestions()
        })
    });    
};

const addEmployee = () => {

    connection.query("SELECT * FROM role", (err,data) => {
        if(err) throw err;

        updatedRole = []

        for(i = 0; i <data.length; i++) {
            let current = data[i];
            updatedRole.push(current.title)
        }
        inquirer
            .prompt ([
                {
                    name: "emplyFirstName",
                    message: "What is the employees first name?",
                    type: "input",
                },
                {
                    name: "emplyLastName",
                    message: "What is the employees last name?",
                    type: "input",
                },
                {
                    name: "selectRole",
                    message: "What role will the employee have in the company?",
                    type: "list",
                    choices: updatedRole,
                }
            ])
            .then(function (answer) {
                console.log(answer)
            
            });
    });

};

const addRole = () => {

    connection.query("SELECT * FROM department", (err, data) => {
        if(err) throw err; 

        currentDept = []

        for(i = 0; i <data.length; i++) {
            let current = data[i];
            currentDept.push(current.department_name)
        }
        
        inquirer
            .prompt ([
                {
                name: "inputRole",
                message: "What role would you like to add?",
                type: "input",
                },
                {
                name: "inputRoleSalary",
                message: "What is the salary for this role?",
                type: "input",
                },
                {
                name: "selectDepartment",
                message: "What department will this role be apart of?",
                type: "list",
                choices: currentDept,
                }
        ])

        .then(function (answer) {
            
            console.log(answers)
            
        });
    }); 




};


const currentDepartments = () => {
 
    connection.query("SELECT department.id, department.department_name, role.title FROM department INNER JOIN role ON role.department_id=department.id;", (err, data) => {
        if(err) throw err; 
        console.table(data);
        initialQuestions()
    })

}


const currentEmployees = () => {
   
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name FROM employee LEFT JOIN role ON role.id=employee.role_id RIGHT JOIN department ON department.id=role.department_id;", (err, data) => {
        if(err) throw err; 
        console.table(data);
        initialQuestions()
    })

}

const currentRoles = () => {
   
    connection.query("SELECT role.id, role.title, role.salary, department.department_name, employee.first_name, employee.last_name FROM role JOIN department ON department.id=role.department_id JOIN employee ON employee.role_id=role.id;", (err, data) => {
        if(err) throw err; 
        console.table(data);
        initialQuestions()
    })

}

const updatedRole = () => {

    
}