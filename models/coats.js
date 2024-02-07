const db = require('../db/dbConfig');

const getAllCoats = async () => {
    try {
        const allCoats = await db.any("SELECT * FROM coats");
        return allCoats;
    } catch (error) {
        return error;
    }
}

const getCoat = async (id) => {
    try {
        const oneCoat = await db.one("SELECT * FROM coats WHERE id=$1", id);
        return oneCoat;
    } catch (error) {
        return error;
    }
}

const createCoat = async (coat) => {
    try {
        const newCoat = await db.one(
            "INSERT INTO coats (name, brand, type, size, is_used, is_available, condition_rating, image_url, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [coat.name, coat.brand, coat.type, coat.size, coat.is_used, coat.is_available, coat.condition_rating, coat.image_url, coat.location_id]
        );
        return newCoat;
    } catch (error) {
        return error;
    }
}

const deleteCoat = async (id) => {
    try {
        const deletedCoat = await db.one("DELETE FROM coats WHERE id=$1 RETURNING *", id);
        return deletedCoat;
    } catch (error) {
        return error;
    }
}

const updateCoat = async (id, coat) => {
    try {
        const updatedCoat = await db.one(
            "UPDATE coats SET name=$1, brand=$2, type=$3, size=$4, is_used=$5, is_available=$6, condition_rating=$7, image_url=$8, location_id=$9 WHERE id=$10 RETURNING *",
            [coat.name, coat.brand, coat.type, coat.size, coat.is_used, coat.is_available, coat.condition_rating, coat.image_url, coat.location_id, id]
        );
        return updatedCoat;
    } catch (error) {
        return error;
    }
}

const getAllCoatsWithLocations = async () => {
    try {
        const allCoatsWithLocations = await db.any(`
            SELECT coats.*, locations.*
            FROM coats
            LEFT JOIN locations ON coats.location_id = locations.location_id;
        `);
        return allCoatsWithLocations;
    } catch (error) {
        console.error('Error fetching coats with locations:', error.message);
        throw error;
    }
};

const getCoatWithLocationById = async (coatId) => {
    try {
        const coatWithLocation = await db.oneOrNone(`
            SELECT coats.*, locations.*
            FROM coats
            LEFT JOIN locations ON coats.location_id = locations.location_id
            WHERE coats.id = $1;
        `, coatId);

        return coatWithLocation;
    } catch (error) {
        console.error(`Error fetching coat with location by ID ${coatId}:`, error.message);
        throw error;
    }
};


module.exports = {
    getAllCoats,
    getCoat,
    createCoat,
    deleteCoat,
    updateCoat,
    getAllCoatsWithLocations, 
    getCoatWithLocationById,
};
