const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    tags: {
        type: [Schema.Types.ObjectId],
        ref: 'Tag',
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    rarity: {
        type: Schema.Types.ObjectId,
        ref: 'Rarity',
        required: true
    },
    crew: {
        type: [Schema.Types.ObjectId],
        ref: 'Character',
        required: true
    },
    alignment: {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    },
    currentRarityShards: {
        type: Number,
        required: true
    },
    unlocked: {
        type: Boolean,
        required: true
    }
});

const Ship = mongoose.model('Ship', shipSchema);
module.exports = Ship;