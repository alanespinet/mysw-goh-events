const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    rewardCharacter: {
        type: Schema.Types.ObjectId,
        ref: 'Character'
    },
    rewardShip: {
        type: Schema.Types.ObjectId,
        ref: 'Ship' 
    },
    unlocksAt: {
        type: Number,
        required: true
    },
    requirements: {
        type: [Schema.Types.ObjectId],
        ref: 'Requirement' 
    },
    relatedEvents: {
        type: [Schema.Types.ObjectId],
        ref: 'Event'
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;