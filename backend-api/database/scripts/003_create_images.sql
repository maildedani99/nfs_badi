CREATE TABLE images
(
    id          bigint unsigned auto_increment,
    image_url   varchar(1020)        not null,
    created_at  timestamp           null,
    updated_at  timestamp           null,
    event_id     bigint unsigned     null,
    PRIMARY KEY(id),
    CONSTRAINT images_events_id_fk
        FOREIGN KEY (event_id) REFERENCES events (id)
);
