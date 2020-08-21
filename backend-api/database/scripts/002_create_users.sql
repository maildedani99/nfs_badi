CREATE table users(
    Id  bigint not null,
    Email varchar(255),
    Username  varchar(255),
    First_Name varchar(255),
    Last_name  varchar(255),
    Bio         varchar(255),
    Email_verified_at timestamp,
    Password varchar(255),
    Remember_Token  varchar(100),
    created_at  timestamp,
    updated_at timestamp,

    PRIMARY KEY(id),
    INDEX (email),
    CONSTRAINT users_email_unique UNIQUE (email)

);
