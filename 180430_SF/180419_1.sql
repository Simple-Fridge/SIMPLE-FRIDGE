-- Create the database task_saver_db and specified it for use.
DROP DATABASE wishes_db;

CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Pick up milk.');
INSERT INTO wishes (wish) VALUES ('Mow the lawn.');
INSERT INTO wishes (wish) VALUES ('Call Shannon back.');