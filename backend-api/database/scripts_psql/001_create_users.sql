CREATE TABLE users
(
    id SERIAL,
    email             varchar(255) not null,
    username          varchar(255) not null,
    first_name        varchar(255) not null,
    last_name         varchar(255) not null,
    gender            char (1)  NOT NULL,
    bio               varchar(999) null,
    birthday          timestamp    null,
    role              varchar(5) null,
    picture           bytea       ,           -- Kept a picture as BLOB (up to 64KB)
    email_verified_at timestamp    null,
    password          varchar(255) not null,
    remember_token    varchar(100) null,
    created_at        timestamp    null,
    updated_at        timestamp    null,
    PRIMARY KEY(id),
    CONSTRAINT users_email_unique UNIQUE (email)
);

