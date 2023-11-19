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
            "INSERT INTO resources (name, brand, type, size, is_used, condition_rating, image_url, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [resource.name, resource.brand, resource.type, resource.size, resource.is_used, resource.condition_rating, resource.image_url, resource.location_id]
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
            "UPDATE resources SET name=$1, brand=$2, type=$3, size=$4, is_used=$5, condition_rating=$6, image_url=$7, location_id=$8 WHERE id=$9 RETURNING *",
            [resource.name, resource.brand, resource.type, resource.size, resource.is_used, resource.condition_rating, resource.image_url, resource.location_id, id]
        );
        return updatedResource;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllResources,
    getResource,
    createResource,
    deleteResource,
    updateResource
};
