const db = require('../db/dbConfig');

const getAllResources = async () => {
    try {
        const allResources = await db.any("SELECT * FROM resources");
        return allResources;
    } catch (error) {
        return error;
    }
}

const getResource = async (id) => {
    try {
        const oneResource = await db.one("SELECT * FROM resources WHERE id=$1", id);
        return oneResource;
    } catch (error) {
        return error;
    }
}

const createResource = async (resource) => {
    try {
        const newResource = await db.one(
            "INSERT INTO resources (name, brand, type, size, is_used, is_available, condition_rating, image_url, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [resource.name, resource.brand, resource.type, resource.size, resource.is_used, resource.is_available, resource.condition_rating, resource.image_url, resource.location_id]
        );
        return newResource;
    } catch (error) {
        return error;
    }
}

const deleteResource = async (id) => {
    try {
        const deletedResource = await db.one("DELETE FROM resources WHERE id=$1 RETURNING *", id);
        return deletedResource;
    } catch (error) {
        return error;
    }
}

const updateResource = async (id, resource) => {
    try {
        const updatedResource = await db.one(
            "UPDATE resources SET name=$1, brand=$2, type=$3, size=$4, is_used=$5, is_available=$6, condition_rating=$7, image_url=$8, location_id=$9 WHERE id=$10 RETURNING *",
            [resource.name, resource.brand, resource.type, resource.size, resource.is_used, resource.is_available, resource.condition_rating, resource.image_url, resource.location_id, id]
        );
        return updatedResource;
    } catch (error) {
        return error;
    }
}

const getAllResourcesWithLocations = async () => {
    try {
        const allResourcesWithLocations = await db.any(`
        SELECT resources.*, locations.*
        FROM resources
        LEFT JOIN locations ON resources.location_id = locations.location_id;
    `);
        return allResourcesWithLocations;
    } catch (error) {
        console.error('Error fetching resources with locations:', error.message);
        throw error; // Rethrow the error to maintain consistent error handling
    }
};

module.exports = {
    getAllResources,
    getResource,
    createResource,
    deleteResource,
    updateResource,
    getAllResourcesWithLocations, // Add this line to export the new function
};
