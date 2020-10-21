CREATE TABLE images
(
    id          bigint unsigned auto_increment,
    image_url   varchar(1020)        not null,
    created_at  timestamp           null,
    updated_at  timestamp           null,
    room_id     bigint unsigned     null,
    PRIMARY KEY(id),
    CONSTRAINT images_rooms_id_fk
        FOREIGN KEY (room_id) REFERENCES rooms (id)
);
