DROP DATABASE IF EXISTS resources;
CREATE DATABASE resources;

\c resources;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  Type TEXT,
  price NUMERIC,
  is_favorite BOOLEAN, 
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT
);
