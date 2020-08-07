CREATE TABLE rooms(
     Id      bigint unsigned auto_increment,
     Name    varchar(255) not null,
     Description varchar(255) null,
     Price  integer,
     Check_In  timestamp,
     Check_Out timestamp,
     Created_at timestamp,
     Updated_at timestamp,
     User_Id     bigint unsigned  null,
     PRIMARY KEY(Id),
     FOREIGN KEY (User_Id) REFERENCES users (Id)


)
