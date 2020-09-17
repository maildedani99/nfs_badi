CREATE TABLE features(
    id bigint unsigned auto_increment,
    name varchar(255) not null,
    created_at  timestamp           null,
    updated_at  timestamp           null,
    PRIMARY KEY (id)
);
