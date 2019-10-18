const data = require('./data');

const mongoose = require('../mongoose/mongoose');
const Tag = require('../mongoose/models/tag');
const Rarity = require('../mongoose/models/rarity');
const Character = require('../mongoose/models/character');
const Ship = require('../mongoose/models/ship');
const RequirementCharacter = require('../mongoose/models/requirementCharacter');
const RequirementShip = require('../mongoose/models/requirementShip');
const Requirement = require('../mongoose/models/requirement');
const Event = require('../mongoose/models/event');
const User = require('../mongoose/models/user');

const helpers = {
    getRarity: async (parent, args, context, info) => {
        const { rarity } = parent;
        return await Rarity.findById( rarity );
    },

    getTags: async (parent, args, context, info) => {
        const { tags } = parent;
        const tagsAsOID = tags.map( tag => new mongoose.Types.ObjectId( tag ) );

        return await Tag.find({ '_id': { $in: [ ...tagsAsOID ] } });
    },

    getAlignment: async (parent, args, context, info) => {
        const { alignment } = parent;
        return await Tag.findById( alignment );
    }
}

const resolvers = {
    Query: {
        test: () => { 
            return 'Test Query Successful'; 
        },

        tags: async () => {
            return await Tag.find({});
        },

        rarities: async () => {
            return await Rarity.find({});
        },

        characters: async () => {
            return await Character.find({});
        },

        ships: async () => {
            return await Ship.find({});
        },

        requirementCharacters: async () => {
            return await RequirementCharacter.find({});
        },

        requirementShips: async () => {
            return await RequirementShip.find({});
        },

        requirements: async () => {
            return await Requirement.find({});
        },

        events: async () => {
            return await Event.find({});
        },

        users: async () => {
            return await User.find({});
        },

        signin: async (parent, args, context, info) => {
            const { username, password } = args;
            let responseData = 'error';

            const user = await User.findOne({ 
                username: username,
                password: password 
            });

            if( user != null ){  responseData = user.accessToken; }
            return responseData;
        }
    },

    Mutation: {
        addTag: async (parent, args, context, info) => {
            const { name } = args;
            const tag = new Tag({ name });

            return await tag.save();
        },

        addRarity: async (parent, args, context, info) => {
            const { level, requiredShards } = args;
            const rarity = new Rarity({
                level,
                requiredShards
            });

            return await rarity.save();
        },

        addCharacter: async (parent, args, context, info) => {
            const { name, tags, level, rarity, gearLevel, relicLevel, alignment, currentRarityShards, unlocked } = args;
            const character = new Character({ name, tags, level, rarity, gearLevel, relicLevel, alignment, currentRarityShards, unlocked });

            return await character.save();
        },

        addShip: async (parent, args, context, info) => {
            const { name, tags, level, rarity, crew, alignment, currentRarityShards, unlocked } = args;
            const ship = new Ship({ name, tags, level, rarity, crew, alignment, currentRarityShards, unlocked });

            return await ship.save();
        },

        addRequirementCharacter: async (parent, args, context, info) => { 
            const { name, gear, level, rarityLevel } = args;
            const reqChar = new RequirementCharacter({ name, gear, level, rarityLevel });

            return await reqChar.save();
        },
        
        addRequirementShip: async (parent, args, context, info) => { 
            const { name, level, rarityLevel } = args;
            const reqShip = new RequirementShip({ name, level, rarityLevel });

            return await reqShip.save();
        },

        addRequirement: async (parent, args, context, info) => { 
            const { requirementType, requirementCharacter, requirementShip } = args;
            const reqData = new Requirement({ requirementType, requirementCharacter, requirementShip });

            return await reqData.save();
        },

        addEvent: async (parent, args, context, info) => { 
            const { name, rewardCharacter, rewardShip, unlocksAt, requirements, relatedEvents } = args;
            const event = new Event({ name, rewardCharacter, rewardShip, unlocksAt, requirements, relatedEvents });

            return await event.save();
        },

        addUser: async (parent, args, context, info) => {
            const { username, password } = args;
            const accessToken = '1fdg2h4g7m8g9hffh8f7d6s5g3hfgjk4jh5k7ghj8f9hds87s65nd4ghjf';

            const user = new User({
                username,
                password,
                accessToken
            });

            return await user.save();
        }
    },

    Character: {
        tags: helpers.getTags,

        rarity: helpers.getRarity,

        alignment: helpers.getAlignment
    },

    Ship: {
        tags: helpers.getTags,

        rarity: helpers.getRarity,

        alignment: helpers.getAlignment,

        crew: async (parent, args, context, info) => {
            const { crew } = parent;
            const crewAsOID = crew.map( crew => new mongoose.Types.ObjectId( crew ) );

            return await Character.find({ '_id': { $in: [ ...crewAsOID ] } });
        }
    },

    Requirement: {
        requirementCharacter: async (parent, args, context, info) => {
            const { requirementCharacter } = parent;            
            return await RequirementCharacter.findById( requirementCharacter );
        },

        requirementShip: async (parent, args, context, info) => {
            const { requirementShip } = parent;
            return await RequirementShip.findById( requirementShip );
        }
    },

    Event: {
        rewardCharacter: async (parent, args, context, info) => {
            const { rewardCharacter } = parent;            
            return await Character.findById( rewardCharacter );
        },

        rewardShip: async (parent, args, context, info) => {
            const { rewardShip } = parent;            
            return await Ship.findById( rewardShip );
        },

        requirements: async (parent, args, context, info) => {
            const { requirements } = parent;   
            const reqsAsOID = requirements.map( requirement => new mongoose.Types.ObjectId( requirement ) );

            return await Requirement.find({ '_id': { $in: [ ...reqsAsOID ] } });
        }
    }
}

module.exports = resolvers;