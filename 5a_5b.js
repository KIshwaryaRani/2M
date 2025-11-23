create database collegedb369;
use collegedb369;

-- create student table
create table stu369 (
  studentid int primary key,
  name varchar(50),
  age int
);

-- create course table
create table course369 (
  courseid varchar(10) primary key,
  coursename varchar(50),
  credits int
);

-- create enrollment table
create table enroll369 (
  enrollid int primary key,
  studentid int,
  courseid varchar(10),
  foreign key (studentid) references stu369(studentid),
  foreign key (courseid) references course369(courseid)
);

-- insert data into student
insert into stu369 values (1, 'ishwarya', 20);
insert into stu369 values (2, 'raja', 21);

-- insert data into course
insert into course369 values ('c101', 'dbms', 3);
insert into course369 values ('c102', 'java', 4);

-- insert data into enrollment
insert into enroll369 values (1, 1, 'c101');
insert into enroll369 values (2, 1, 'c102');
insert into enroll369 values (3, 2, 'c102');

-- display results
select * from stu369;
select * from course369;
select * from enroll369;



create database collegedb369;
use collegedb369;

-- create tables
create table stu369 (
  studentid int primary key,
  name varchar(50),
  age int
);

create table course369 (
  courseid int primary key,
  coursename varchar(50),
  credits int
);

-- insert records
insert into stu369 values (1, 'ishwarya', 20);
insert into stu369 values (2, 'raja', 21);

insert into course369 values (101, 'dbms', 4);
insert into course369 values (102, 'java', 3);

-- read data
select * from stu369;
select * from course369;

-- update data
update stu369 set age = 22 where studentid = 1;
update course369 set credits = 5 where courseid = 101;

-- delete data
delete from stu369 where studentid = 2;
delete from course369 where courseid = 102;

-- final display
select * from stu369;
select * from course369;
