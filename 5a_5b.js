CREATE DATABASE CollegeDB;
USE CollegeDB;


-- Create Student table
CREATE TABLE Student (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT
);

-- Create Course table
CREATE TABLE Course (
  CourseID INT PRIMARY KEY,
  CourseName VARCHAR(50),
  Credits INT
);

-- Create Enrollment table
CREATE TABLE Enrollment (
  EnrollID INT PRIMARY KEY,
  StudentID INT,
  CourseID INT,
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);


INSERT INTO Student VALUES (1, 'Ishwarya', 20);
INSERT INTO Student VALUES (2, 'Raja', 21);

INSERT INTO Course VALUES ('C101', 'DBMS', 3);
INSERT INTO Course VALUES ('C102', 'Java', 4);

INSERT INTO Enrollment VALUES (1, 1, 'C101');
INSERT INTO Enrollment VALUES (2, 1, 'C102');
INSERT INTO Enrollment VALUES (3, 2, 'C102');

SELECT * FROM Student;
SELECT * FROM Course;
SELECT * FROM Enrollment;






CREATE DATABASE CollegeDB;
USE CollegeDB;

-- Create Tables
CREATE TABLE Student (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT
);

CREATE TABLE Course (
  CourseID INT PRIMARY KEY,
  CourseName VARCHAR(50),
  Credits INT
);

-- Insert Records
INSERT INTO Student VALUES (1, 'Ishwarya', 20);
INSERT INTO Student VALUES (2, 'Raja', 21);
INSERT INTO Course VALUES (101, 'DBMS', 4);
INSERT INTO Course VALUES (102, 'Java', 3);

-- Read Data
SELECT * FROM Student;
SELECT * FROM Course;

-- Update Data
UPDATE Student SET Age = 22 WHERE StudentID = 1;
UPDATE Course SET Credits = 5 WHERE CourseID = 101;

-- Delete Data
DELETE FROM Student WHERE StudentID = 2;
DELETE FROM Course WHERE CourseID = 102;

-- Final Display
SELECT * FROM Student;
SELECT * FROM Course;
