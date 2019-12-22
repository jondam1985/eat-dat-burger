CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
id int not null auto_increment,
name varchar(255) not null,
devoured boolean not null default false,
primary key(id)
);
