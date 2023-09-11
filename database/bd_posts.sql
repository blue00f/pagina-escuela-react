create database posts;
use posts;

create table users(
	idUser int auto_increment not null,
    name varchar(20) not null,
    password varchar(20) not null,
    constraint pk_user primary key (idUser)
);

create table posts(
	idPost int auto_increment not null,
    hidden boolean default false,
    title varchar(100) not null,
    content varchar(255) not null,
    dateUploaded datetime default now(),
    user int default 1,
    constraint pk_post primary key (idPost),
    constraint fk_user foreign key (user) references users(idUser)
);