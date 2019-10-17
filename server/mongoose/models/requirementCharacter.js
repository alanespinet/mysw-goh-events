const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requirementCharacterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gear: {
        type: Number,
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

const RequirementCharacter = mongoose.model('RequirementCharacter', requirementCharacterSchema);
module.exports = RequirementCharacter;