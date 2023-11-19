DROP DATABASE IF EXISTS resources;
CREATE DATABASE resources;

\c resources;

-- Table: resources
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  type TEXT,
  size TEXT NOT NULL,
  is_used BOOLEAN, 
  condition_rating INTEGER CHECK (condition_rating >= 1 AND condition_rating <= 5),
  image_url TEXT,
  location_id INTEGER REFERENCES locations(location_id) ON DELETE SET NULL
);

-- Table: locations
CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  location_name TEXT NOT NULL,
  city TEXT,
  state CHAR(2) CHECK (CHAR_LENGTH(state) = 2),
  zip_code VARCHAR(5) CHECK (zip_code ~ '^[0-9]{5}$')
);
