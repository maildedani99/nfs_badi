CREATE TABLE features(
                         id SERIAL,
                         name varchar(255) not null,
                         created_at  timestamp           null,
                         updated_at  timestamp           null,
                         PRIMARY KEY (id)
);
