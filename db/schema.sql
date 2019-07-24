create database burgers_db;
use burgers_db;
create table burgers (
id int not null auto_increment,
name varchar(50) not null,
devoured boolean not null default 0,
primary key(id)
);
