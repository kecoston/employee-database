const mysql = require("mysql");
const inquirer = require("inquirer");

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
        .prompt({
           name: "user-choice",
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
            "Update employee managers",
            "View employees by manager",
            "Delete a department",
            "Delete a role",
            "Delete an employee",
            "View current budget for a department"
        ]        
    })
    .then(function(answer) {
        switch(answer.user-choice) {
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



