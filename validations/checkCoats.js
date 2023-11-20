const db = require('../db/dbConfig');

const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: 'Name field is required in the request body' });
    }
};

const checkBrand = (req, res, next) => {
    if (req.body.brand) {
        next();
    } else {
        res.status(400).json({ error: 'Brand field is required in the request body' });
    }
};

const checkBoolean = (req, res, next) => {
    const isUsed = req.body.is_used;
    const isAvailable = req.body.is_available;  // New check for is_available
    if (typeof isUsed === 'boolean' && typeof isAvailable === 'boolean') {
        next();
    } else {
        res.status(400).json({ error: 'is_used and is_available must be of boolean type in the request body' });
    }
};

const checkLocationId = async (req, res, next) => {
    const locationId = req.body.location_id;
    if (!locationId) {
        // If location_id is not provided, proceed without validation
        next();
    } else {
        try {
            const location = await db.one("SELECT * FROM locations WHERE location_id = $1", locationId);
            if (location) {
                next();
            } else {
                res.status(400).json({ error: 'Invalid location_id in the request body' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = { checkName, checkBrand, checkBoolean, checkLocationId };
