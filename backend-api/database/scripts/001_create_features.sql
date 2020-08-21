CREATE TABLE  features (
    id  bigint unsigned auto_increment,
    smoking varchar(100),
    wifi varchar(100),
    pets varchar(100),
    created_at datetime,
    updated_at datetime,
    primary key (id)
);
