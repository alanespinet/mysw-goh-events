const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
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
    gearLevel: {
        type: Number,
        required: true
    },
    relicLevel: {
        type: Number,
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

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;