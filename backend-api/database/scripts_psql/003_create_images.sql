CREATE TABLE images
(
    id          SERIAL,
    image_url   varchar(1020)        not null,
    created_at  timestamp           null,
    updated_at  timestamp           null,
    room_id     integer    null,
    PRIMARY KEY(id),
    CONSTRAINT images_rooms_id_fk
        FOREIGN KEY (room_id) REFERENCES rooms (id)
);
