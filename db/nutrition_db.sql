DROP DATABASE IF EXISTS nutrition_db;

CREATE DATABASE nutrition_db;

USE nutrition_db;

SELECT * FROM nutrients; 

SELECT * FROM foods; 

DROP TABLE if exists users;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	myPassword bigint,
	passwordEnc bigint NOT NULL,
	PRIMARY KEY (id)
);

CREATE Trigger encrypt BEFORE INSERT ON users for each Row set New.passwordEnc = MOD(POW(New.myPassword,9),106), New.myPassword = 0;

INSERT INTO users (email,myPassword,passwordEnc)
VALUES ("snoopy@snoopy.com", 66, 0);
