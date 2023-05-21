
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "img" (
    "id" SERIAL PRIMARY KEY,
    "photo_url" VARCHAR (1000) 
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (1000) NOT NULL,
    "image_id" INT REFERENCES  "img"
);

CREATE TABLE "workspaces" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES  "user",
    "name" VARCHAR (80),
    "Category" VARCHAR (80)
);

CREATE TABLE "bookmark" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "url" VARCHAR (1000) NOT NULL,
    "photo" VARCHAR (1000) NOT NULL,
    "workspace_id"INT REFERENCES  "workspaces"
);