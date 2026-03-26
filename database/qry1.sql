drop database mydb;
create database mydb;
use mydb;

-- Create tables
CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE (email)
);

CREATE TABLE `classes` (
  `class_id` INT NOT NULL AUTO_INCREMENT,
  `class_name` VARCHAR(45) NOT NULL,
  `room` VARCHAR(100) NOT NULL,
  `teacher_id` int,
  PRIMARY KEY (`class_id`),
  FOREIGN KEY (`teacher_id`)
  REFERENCES `teachers` (`teacher_id`)
  
);

CREATE TABLE `students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `preferred_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `student_rfid` varchar(100) DEFAULT NULL,
  `class_id` int,
  FOREIGN KEY (`class_id`)
  REFERENCES `classes` (`class_id`),
  PRIMARY KEY (`student_id`),
  UNIQUE (student_rfid)
);

CREATE TABLE `parents` (
  `parent_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  PRIMARY KEY (`parent_id`)
);

CREATE TABLE `students_parents` (
  `student_parent_id` INT NOT NULL AUTO_INCREMENT,
  `parent_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  `primary_contact` boolean NOT NULL,
  PRIMARY KEY (`student_parent_id`),
  FOREIGN KEY (`parent_id`)
  REFERENCES `parents` (`parent_id`),
  FOREIGN KEY (`student_id`)
  REFERENCES `students` (`student_id`)
);

CREATE TABLE `subjects` (
  `subject_id` INT NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `class_id` INT NOT NULL,
  PRIMARY KEY (`subject_id`),
  FOREIGN KEY (`class_id`)
  REFERENCES `classes` (`class_id`)
);

CREATE TABLE `exercises` (
  `exercise_id` INT NOT NULL AUTO_INCREMENT,
  `code` varchar(100) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `date_to_take` date NOT NULL,
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`exercise_id`),
  FOREIGN KEY (`subject_id`)
  REFERENCES `subjects` (`subject_id`)
);

CREATE TABLE `marks` (
  `mark_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `exercise_id` INT NOT NULL,
  `result` int NOT NULL,
  `note` varchar(200),
  PRIMARY KEY (`mark_id`),
  FOREIGN KEY (`exercise_id`)
  REFERENCES `exercises` (`exercise_id`),
  FOREIGN KEY (`student_id`)
  REFERENCES `students` (`student_id`)
);

CREATE TABLE `attendance_options` (
  `attendance_option_id` INT NOT NULL AUTO_INCREMENT,
  `attendance_option` varchar(100) NOT NULL,
  PRIMARY KEY (`attendance_option_id`)
);

CREATE TABLE `attendance` (
  `attendance_id` INT NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `student_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  `attendance_option_id` INT NOT NULL,
  `note` varchar(300),
  PRIMARY KEY (`attendance_id`),
  FOREIGN KEY (`attendance_option_id`)
  REFERENCES `attendance_options` (`attendance_option_id`),
  FOREIGN KEY (`student_id`)
  REFERENCES `students` (`student_id`),
  FOREIGN KEY (`subject_id`)
  REFERENCES `subjects` (`subject_id`)
);

CREATE TABLE `roles` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`)
);

CREATE TABLE `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`role_id`)
  REFERENCES `roles` (`role_id`),
  UNIQUE (user_name)
);

-- Audut table
create table `audit` (
	audit_id int not null auto_increment,
    audit_date datetime,
    operation varchar(20),
    audit_field varchar(200),
    primary key (`audit_id`)
);

-- Triggers
delimiter |
create trigger after_teachers_insert
after insert on teachers
for each row
	insert into audit (audit_date, operation, audit_field) 
	values (now(), 'insert', concat_ws(', ', NEW.first_name, NEW.last_name, NEW.email));

create trigger after_teachers_update
after update on teachers
for each row
	insert into audit (audit_date, operation, audit_field) 
	values (now(), 'update', concat_ws(', ', NEW.first_name, NEW.last_name, NEW.email));

-- Add testing data
-- -------------------------------------------------------------------------------------------------------
-- teachers (also check that the audit table has been populated from the insert trigger for teachers)
INSERT INTO `teachers` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Austin', 'Powers', 'austssin.powers@gmail.com', '8675309');
INSERT INTO `teachers` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Ron', 'Burgandy', 'ron.Burgandy@whoop.com', '8675309');

-- classes
INSERT INTO `classes` (`class_name`, `room`, `teacher_id`) VALUES ('Year 9 East', 'Room 12 East Block', 1);
INSERT INTO `classes` (`class_name`, `room`, `teacher_id`) VALUES ('Year 9 West', 'Room 1 West Block', 2);

-- subjects
INSERT INTO `subjects` (`subject_name`, `description`, `class_id`) VALUES ('Cologne choices', 'Picking the appropriate cologne before your date', 2);
INSERT INTO `subjects` (`subject_name`, `description`, `class_id`) VALUES ('Developing a catch-phrase', 'Stay Classy!', 2);
INSERT INTO `subjects` (`subject_name`, `description`, `class_id`) VALUES ('60s Dancing', 'Shake it baby', 1);
INSERT INTO `subjects` (`subject_name`, `description`, `class_id`) VALUES ('Style', 'What velvet suits and ruffled shirts are best for you?', 1);

-- students
INSERT INTO `students` (`first_name`, `last_name`, `preferred_name`, `email`, `phone`, `student_rfid`, `class_id`) VALUES ('Fred', 'Nerk', 'Freddy', 'fred.nerk@school.com.au', '088675309', 'ABC-A7000-003303', 1);
INSERT INTO `students` (`first_name`, `last_name`, `preferred_name`, `email`, `phone`, `student_rfid`, `class_id`) VALUES ('Silly', 'Sally', 'Sal', 'sill.sally@school.com.au', '088675309', 'B66-A876-003303', 1);
INSERT INTO `students` (`first_name`, `last_name`, `preferred_name`, `email`, `phone`, `student_rfid`, `class_id`) VALUES ('James', 'Bond', 'Jammie', 'james.bond@school.com.au', '088675309', 'B66-A7000-099403', 1);
INSERT INTO `students` (`first_name`, `last_name`, `preferred_name`, `email`, `phone`, `student_rfid`, `class_id`) VALUES ('Doctor', 'Evil', 'Doctor', 'doctor.evil@school.com.au', '088675309', 'Z66-A7400-043303', 2);
INSERT INTO `students` (`first_name`, `last_name`, `preferred_name`, `email`, `phone`, `student_rfid`, `class_id`) VALUES ('Roddy', 'Piper', 'Rod', 'roddy.piper@school.com.au', '088675309', 'B6E-A7000-003303', 2);
INSERT INTO `students` (`first_name`, `last_name`, `preferred_name`, `email`, `phone`, `student_rfid`, `class_id`) VALUES ('Randy', 'Savage', 'Randy', 'randy.savage@school.com.au', '088675309', 'BBB-A7000-003303', 2);

-- parents
INSERT INTO `parents` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Lance', 'Lancellot', 'lance.lancellot@camelot.co', '088675309');
INSERT INTO `parents` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Joe', 'Jackson', 'joe.jackson@jacksonsjacksonandjackson.com.au', '088675309');
INSERT INTO `parents` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Hannah', 'Banana', 'hannah@bananasrus.aus.au', '088675309');
INSERT INTO `parents` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Matt', 'Mundane', 'matt.mundane@uxdesignpros.com.au', '088675309');
INSERT INTO `parents` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Nicola', 'Namaste', 'nicola_namaste@divinegreetings.com.au', '088675309');

-- parents and students
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (1,1,true); -- lance for fred (primary)
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (1,2,true); -- lance for Silly (primary)
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (2,3,true); -- Joe for James (primary)
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (3,4,true); -- Hannah for Dr Evil (primary)
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (4,5,false); -- Matt for Roddy
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (5,5,false); -- Nicola for Roddy (primary)
INSERT INTO `students_parents` (`parent_id`, `student_id`, `primary_contact`) VALUES (5,6,false); -- Nicola for Randy (primary)

-- attendance options
INSERT INTO `attendance_options` (`attendance_option`) VALUES ('present');
INSERT INTO `attendance_options` (`attendance_option`) VALUES ('absent');
INSERT INTO `attendance_options` (`attendance_option`) VALUES ('late arrival');
INSERT INTO `attendance_options` (`attendance_option`) VALUES ('left early');
INSERT INTO `attendance_options` (`attendance_option`) VALUES ('explained absence');

-- attendance
-- For subject 'developing a catch phase', taught on 13/03/2026
INSERT INTO `attendance` (`date`, `student_id`, `attendance_option_id`, `subject_id`, `note`) VALUES ('2026-03-13', 1, 1, 2, null); -- present
INSERT INTO `attendance` (`date`, `student_id`, `attendance_option_id`, `subject_id`, `note`) VALUES ('2026-03-13', 2, 2, 2, null); -- absent
INSERT INTO `attendance` (`date`, `student_id`, `attendance_option_id`, `subject_id`, `note`) VALUES ('2026-03-13', 3, 3, 2, null); -- late
INSERT INTO `attendance` (`date`, `student_id`, `attendance_option_id`, `subject_id`, `note`) VALUES ('2026-03-13', 4, 4, 2, 'Doctors Appointment'); -- left early
INSERT INTO `attendance` (`date`, `student_id`, `attendance_option_id`, `subject_id`, `note`) VALUES ('2026-03-13', 5, 5, 2, 'Pod-People assimilated family'); -- explained absence
INSERT INTO `attendance` (`date`, `student_id`, `attendance_option_id`, `subject_id`, `note`) VALUES ('2026-03-13', 6, 1, 2, null); -- present

-- excercises
-- for 'developing a catch-phrase' exercise on the 13/03/2026
INSERT INTO `exercises` (`code`, `title`, `description`, `date_to_take`, `subject_id`) VALUES ('style001', 'Define your style', 'Use the skills taught in class to check if you have style', '2026-03-13', 2);

-- marks
-- for 'developing a catch-phrase' on the 13/03/2026
INSERT INTO `marks` (`student_id`, `exercise_id`, `result`, `note`) VALUES (1, 1, 10,'Awesome work. Stay classy!');
INSERT INTO `marks` (`student_id`, `exercise_id`, `result`, `note`) VALUES (2, 1, 0, null);
INSERT INTO `marks` (`student_id`, `exercise_id`, `result`, `note`) VALUES (3, 1, 7,'Ran out of time');
INSERT INTO `marks` (`student_id`, `exercise_id`, `result`, `note`) VALUES (4, 1, 9,'Good work');
INSERT INTO `marks` (`student_id`, `exercise_id`, `result`, `note`) VALUES (5, 1, 0, null);
INSERT INTO `marks` (`student_id`, `exercise_id`, `result`, `note`) VALUES (6, 1, 6,'Not your best work');

-- roles
INSERT INTO `roles` (`role_name`) VALUES ('admin');
INSERT INTO `roles` (`role_name`) VALUES ('robot');
INSERT INTO `roles` (`role_name`) VALUES ('teacher');
INSERT INTO `roles` (`role_name`) VALUES ('reporting');

-- users
INSERT INTO `users` (`user_name`, `password`, `first_name`, `last_name`, `email`, `role_id`) VALUES ('kenedyc', 'password', 'caroline', 'kenedy', 'caroline.kenedy@school.com.au', 1);
INSERT INTO `users` (`user_name`, `password`, `first_name`, `last_name`, `email`, `role_id`) VALUES ('robot001', 'beepboink', 'robby', 'robot', 'robot001@school.com.au', 2);
INSERT INTO `users` (`user_name`, `password`, `first_name`, `last_name`, `email`, `role_id`) VALUES ('subby01', 'subsubsub', 'tracey', 'grimshaw', 'grimshaw.tracey@subbys.com.au', 3);
INSERT INTO `users` (`user_name`, `password`, `first_name`, `last_name`, `email`, `role_id`) VALUES ('rooneye', 'topguy', 'edward', 'rooney', 'principal@school.com.au', 4);

-- Test Audit update triggers for teachers table
UPDATE `teachers` SET `email` = "Poop1@school.com.au" where teacher_id =1;
UPDATE `teachers` SET `email` = "Poop2@school.com,au" where teacher_id =2;

-- Create views

-- Students not present for a subject
create view not_present as
SELECT
    attendance.Date,
    subjects.subject_name,
    attendance_options.attendance_option,
    students.first_name,
    students.last_name,
    attendance.note
FROM
    (
        (
            attendance
            INNER JOIN attendance_options ON attendance.attendance_option_id = attendance_options.attendance_option_id
        )
        INNER JOIN subjects ON attendance.subject_id = subjects.subject_id
    )
    INNER JOIN students ON attendance.student_id = students.student_id
GROUP BY
    attendance.Date,
    subjects.subject_name,
    attendance_options.attendance_option,
    students.first_name,
    students.last_name,
    attendance.attendance_option_id
HAVING
    (((attendance.attendance_option_id) <> 1));


-- average marks by excercise for attending students
create view avg_marks as  
SELECT
    exercises.date_to_take as `exercise_date`,
    Avg(marks.result) AS `result_average`,
    subjects.subject_name as subject,
    classes.class_name as class,
    teachers.last_name as teacher
FROM
    (
        (
            (
                (
                    marks
                    INNER JOIN exercises ON marks.exercise_id = exercises.exercise_id
                )
                INNER JOIN subjects ON exercises.subject_id = subjects.subject_id
            )
            INNER JOIN attendance ON subjects.subject_id = attendance.subject_id
        )
        INNER JOIN classes ON subjects.class_id = classes.class_id
    )
    INNER JOIN teachers ON classes.teacher_id = teachers.teacher_id
WHERE
    (
        (
            (attendance.attendance_id) <> 2
            AND (attendance.attendance_id) <> 5
        )
    )
GROUP BY
    exercises.date_to_take,
    subjects.subject_name,
    classes.class_name,
    teachers.last_name;


show triggers from mydb;