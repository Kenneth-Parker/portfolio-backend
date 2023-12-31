DROP DATABASE IF EXISTS coats;
CREATE DATABASE coats;

 \c coats;

DROP TABLE IF EXISTS locations;
CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  location_name TEXT NOT NULL,
  city TEXT,
  state CHAR(2) CHECK (CHAR_LENGTH(state) = 2),
  zip_code VARCHAR(5) CHECK (zip_code ~ '^[0-9]{5}$')
);

DROP TABLE IF EXISTS coats;
CREATE TABLE coats (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  type TEXT,
  size TEXT NOT NULL,
  is_used BOOLEAN, 
  is_available BOOLEAN NOT NULL, 
  condition_rating INTEGER CHECK (condition_rating >= 1 AND condition_rating <= 5),
  image_url TEXT,
  location_id INTEGER REFERENCES locations(location_id) NOT NULL
);
