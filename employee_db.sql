DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE department (
id INT(10) AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT(10) AUTO_INCREMENT NOT NULL, 
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT(10) NOT NULL,
manager BOOLEAN,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
id INT(10) AUTO_INCREMENT NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL, 
role_id INT(10) NOT NULL,
manager_id INT(10),
PRIMARY KEY (id)
);


INSERT INTO department (name)
VALUES("Design");

INSERT INTO department (name)
VALUES("Marketing");

INSERT INTO department (name)
VALUES("IT");


INSERT INTO role (title, manager, salary, department_id)
VALUES ("Graphic Designer", false, 60000.00, 1);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Web Designer", false, 75000.00, 1);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Art Director", false, 100000.00, 1);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Public Relations Specialist", true, 60000.00, 2);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Digital Marketing Specialist", false, 80000.00, 2);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Marketing Manager", true, 150000.00, 2);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Help Desk Analyst",false, 57000.00, 3);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Network Administrator", false, 80000.00, 3);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("Full Stack Web Developer", false, 9000.00, 3);

INSERT INTO role (title, manager, salary, department_id)
VALUES ("IT Project Manager", true, 100000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Roy", "Trenneman", 1, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maurice", "Moss", 2, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jen", "Barber", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Douglas", "Reynholm", 4, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Denholm", "Reynholm", 5, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Beth", "Gaga", 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charity", "Beets", 7, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daniel", "Cary", 8, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julian", "Holmes", 9, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Dowd", 10, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Richard", "Auyoade", 10, NULL);

