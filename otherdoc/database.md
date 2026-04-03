# Databases

information around databases

- [Databases](#databases)
  - [Some free databases to try](#some-free-databases-to-try)
  - [Entity relationship diagram (ERD)](#entity-relationship-diagram-erd)
  - [SQL Commands](#sql-commands)
  - [SQL Joins](#sql-joins)
  - [Examples](#examples)

[Return Home](/basics)

## Some free databases to try

- MySQL
- MariaDB
- Progress
- MongoDB

**[`^        back to top        ^`](#databases)**

## Entity relationship diagram (ERD)

Used to map data entities, thier attributes, and relationships between entities. 

![ERD](https://raw.githubusercontent.com/petersem/basics/refs/heads/main/misc/erd.jpg)

**[`^        back to top        ^`](#databases)**

## SQL Commands

![Commands](https://raw.githubusercontent.com/petersem/basics/refs/heads/main/misc/sqlcommand.jpg)

**[`^        back to top        ^`](#databases)**

## SQL Joins

![Joins](https://raw.githubusercontent.com/petersem/basics/refs/heads/main/misc/joins.png)

**[`^        back to top        ^`](#databases)**

## Examples

Example DDL and SQL

``` sql
drop database mydb;
create database mydb;
use mydb;

-- create table with check constraint
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `age` int,
  CHECK (age >= 18),
  PRIMARY KEY (`customer_id`),
  UNIQUE (email)
);

-- Before insert trigger
CREATE TRIGGER check_customer_age_before_insert
BEFORE INSERT ON customers
FOR EACH ROW
BEGIN
    IF NEW.age < 18 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Customer must be 18 or older.';
    END IF;
END;

-- insert row
INSERT INTO `customers` (`first_name`, `last_name`, `email`, `age`) VALUES ('Austin', 'Powers', 'austin.powers@gmail.com', 17);

-- update 
UPDATE `customer` SET `email` = "drevil@shawing.com.au" where customer_id = 1;

-- create view
create view customers as
SELECT
    *
FROM
    customers

-- list triggers
show triggers from mydb;

-- list MySQL version
SELECT version();
```

**[`^        back to top        ^`](#databases)**
