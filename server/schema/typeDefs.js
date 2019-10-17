const typeDefs = `
    type Event {
        id: String!
        name: String!
        rewardCharacter: Character
        rewardShip: Ship
        unlocksAt: Int!
        requirements: [Requirement]!
        relatedEvents: [Event]
    }

    type Character {
        id: String!
        name: String!
        level: Int!
        tags: [Tag]!
        rarity: Rarity!
        gearLevel: Int!
        relicLevel: Int!
        alignment: Tag!
        currentRarityShards: Int!
        unlocked: Boolean!
    }

    type Ship {
        id: String!
        name: String!
        level: Int!
        tags: [Tag]!
        rarity: Rarity!
        crew: [Character]!
        alignment: Tag!
        currentRarityShards: Int!
        unlocked: Boolean!
    }

    type Tag {
        id: String!
        name: String!
    }

    type Rarity {
        id: String!
        level: Int!
        requiredShards: Int!
    }

    type Requirement {
        id: String!
        requirementType: Int!
        requirementCharacter: RequirementCharacter
        requirementShip: RequirementShip
    }

    type RequirementCharacter {
        id: String!
        name: String!
        gear: Int!
        level: Int!
        rarityLevel: Int!
    }

    type RequirementShip {
        id: String!
        name: String!
        level: Int!
        rarityLevel: Int!
    }

    type Query {
        test: String!
        tags: [Tag]!
        rarities: [Rarity]!
        characters: [Character]!
        character(Name: String!): Character
        ships: [Ship]!
        requirementCharacters: [RequirementCharacter]!
        requirementShips: [RequirementShip]!
        requirements: [Requirement]!
        events: [Event]!
    }

    type Mutation {
        addTag(name: String!): Tag
        
        addRarity(level: Int!, requiredShards: Int!): Rarity!
        
        addCharacter(
                    name: String!, 
                    tags: [String!],
                    level: Int!, 
                    rarity: String!, 
                    gearLevel: Int!, 
                    relicLevel: Int,
                    alignment: String!,
                    currentRarityShards: Int!,
                    unlocked: Boolean!
        ): Character
        
        addShip(
                name: String!,
                tags: [String]!,
                level: Int!,
                rarity: String!,
                crew: [String]!,
                alignment: String!,
                currentRarityShards: Int!,
                unlocked: Boolean!
        ): Ship

        addRequirementCharacter(name: String!, gear: Int!, level: Int!, rarityLevel: Int!): RequirementCharacter

        addRequirementShip(name: String!, level: Int!, rarityLevel: Int!): RequirementShip

        addRequirement(requirementType: Int!, requirementCharacter: String, requirementShip: String): Requirement
    
        addEvent(
                name: String!, 
                rewardCharacter: String, 
                rewardShip: String, 
                unlocksAt: Int!, 
                requirements: [String]!,
                relatedEvents: [String]
        ): Event
    }
`;

module.exports = typeDefs;