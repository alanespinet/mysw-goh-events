const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requirementShipSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    rarityLevel: {
        type: Number,
        required: true
    }
});

const RequirementShip = mongoose.model('RequirementShip', requirementShipSchema);
module.exports = RequirementShip;