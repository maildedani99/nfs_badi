CREATE TABLE reserves (

id                SERIAL,
room_id           integer not null,
host_id           integer not null,
guest_id          integer not null,
arrival           timestamp    null,
departure         timestamp    null,
price             integer not null,
created_at        timestamp    null,
updated_at        timestamp    null,
status            varchar(20)  not null,

PRIMARY KEY(id),
CONSTRAINT reserves_rooms_id_fk
FOREIGN KEY (room_id) REFERENCES rooms(id),
FOREIGN KEY (guest_id) REFERENCES users(id)
);

ALTER TABLE reserves
    ADD
        FOREIGN KEY (guest_id) REFERENCES users(id);
