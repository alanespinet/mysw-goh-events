const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requirementSchema = new Schema({
    requirementType: {
        type: Number,
        required: true
    },
    requirementCharacter: {
        type: [Schema.Types.ObjectId],
        ref: 'RequirementCharacter'
    },
    requirementShip: {
        type: [Schema.Types.ObjectId],
        ref: 'RequirementShip'
    }
});

const Requirement = mongoose.model('Requirement', requirementSchema);
module.exports = Requirement;