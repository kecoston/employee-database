DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;


CREATE TABLE department (
id INT(10)NOT NULL,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee_role (
id INT(10) NOT NULL, 
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT(3) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT(10) NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL, 
role_id VARCHAR(30) NOT NULL,
manager_id INT(10),
PRIMARY KEY (id)
);

CREATE TABLE manager (
manager_id INT(10) NOT NULL,
firt_name VARCHAR(30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
PRIMARY KEY (manager_id)
);



