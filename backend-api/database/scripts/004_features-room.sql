CREATE TABLE features_room(
    id  bigint auto_increment not null ,
    user_id int not null ,
    room_id int not null,
    FOREIGN KEY (room_id) REFERENCES rooms(user_id),
    primary key (id)
);
