CREATE TABLE rooms
(
    id          bigint unsigned auto_increment,
    name        varchar(255)        not null,
    description varchar(255)        null,
    created_at  timestamp           null,
    updated_at  timestamp           null,
    user_id     bigint unsigned     null,
    PRIMARY KEY(id),
    CONSTRAINT rooms_users_id_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
);
