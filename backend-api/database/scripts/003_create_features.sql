CREATE TABLE features
(
    Id                  bigint unsigned auto_increment,
    Room_Id             varchar(255) not null,
    Smoking             bit not null,
    Pet                 bit not null,
    Wifi                bit not null,
    Photos              binary not null,
    PRIMARY KEY(Room_Id)

);
