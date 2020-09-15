CREATE TABLE room_features(
    id bigint auto_increment,
    feature_id bigint unsigned     null,
    room_id bigint unsigned     null,
    PRIMARY KEY (id),
    CONSTRAINT room_features_rooms_id_fk
        FOREIGN KEY (room_id) REFERENCES rooms (id),
    CONSTRAINT room_features_features_id_fk
        FOREIGN KEY (feature_id) REFERENCES features (id)
);
