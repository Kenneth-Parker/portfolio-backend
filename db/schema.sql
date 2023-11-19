DROP DATABASE IF EXISTS resources;
CREATE DATABASE resources;

\c resources;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  type TEXT,
  size TEXT NOT NULL,
  is_used BOOLEAN, 
  condition_rating INTEGER CHECK (condition_rating >= 1 AND condition_rating <= 5),
  image_url TEXT
);

