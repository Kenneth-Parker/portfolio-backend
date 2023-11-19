// models/locations.js
const db = require('../db/dbConfig');

const getAllLocations = async () => {
    try {
        const allLocations = await db.any("SELECT * FROM locations");
        return allLocations;
    } catch (error) {
        return error;
    }
}

const getLocation = async (id) => {
    try {
        const oneLocation = await db.one("SELECT * FROM locations WHERE location_id=$1", id);
        return oneLocation;
    } catch (error) {
        return error;
    }
}

const createLocation = async (location) => {
    try {
        const newLocation = await db.one(
            "INSERT INTO locations (location_name, city, state, zip_code) VALUES ($1, $2, $3, $4) RETURNING *",
            [location.location_name, location.city, location.state, location.zip_code]
        );
        return newLocation;
    } catch (error) {
        return error;
    }
}

const deleteLocation = async (id) => {
    try {
        const deletedLocation = await db.one("DELETE FROM locations WHERE location_id=$1 RETURNING *", id);
        return deletedLocation;
    } catch (error) {
        return error;
    }
}

const updateLocation = async (id, location) => {
    try {
        const updatedLocation = await db.one(
            "UPDATE locations SET location_name=$1, city=$2, state=$3, zip_code=$4 WHERE location_id=$5 RETURNING *",
            [location.location_name, location.city, location.state, location.zip_code, id]
        );
        return updatedLocation;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllLocations,
    getLocation,
    createLocation,
    deleteLocation,
    updateLocation
};
