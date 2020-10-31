CREATE TABLE room_features(
id SERIAL,
feature_id integer    null,
room_id integer    null,
PRIMARY KEY (id),
CONSTRAINT room_features_rooms_id_fk
FOREIGN KEY (room_id) REFERENCES rooms (id),
 CONSTRAINT room_features_features_id_fk
FOREIGN KEY (feature_id) REFERENCES features (id)
);
