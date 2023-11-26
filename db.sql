create database loginwithjwt;

use loginwithjwt;

create table users(
    id int primary key not null auto_increment,
    name varchar(40) not null,
    email varchar(40) not null unique,
    password varchar(30) not null
);