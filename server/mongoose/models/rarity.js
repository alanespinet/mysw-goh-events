const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raritySchema = new Schema({
    level: {
        type: Number,
        required: true
    },
    requiredShards: {
        type: Number,
        required: true
    }
});

const Rarity = mongoose.model('Rarity', raritySchema);
module.exports = Rarity;