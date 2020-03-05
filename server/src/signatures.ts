import { SignatureMap, AoE2AIParameterTypes } from "./lib";

const Signatures: SignatureMap  = {
    "build": [
        {
            label: "(build <building>)",
            documentation: "This action builds the given building. \nThe action allows the use of building line wildcard parameters for the <building>. ",
            parameters: [
                AoE2AIParameterTypes.BUILDING
            ]
        }
    ],
    "train": [
        {
            label: "(train <unit>)",
            documentation: "This action trains the given unit. To prevent cheating, this action uses the same criteria as the can-train fact to make sure the unit can be trained. The fact allows the use of unit line wildcard parameters for the <unit>.",
            parameters: [
                AoE2AIParameterTypes.UNIT
            ]
        }
    ],    
    "can-build-with-escrow": [
        {
            label: "(can-build-with-escrow <building>)",
            documentation: "This fact checks whether the computer player can build the given building. In particular it checks: \n 1. That the building is available to the computer player’s civilization. \n 2. That the tech tree prerequisites for building are met. \n 3. That the resources needed for building are available when using escrow amounts.  \n \t The fact allows the use of building line wildcard parameters for the <building>",
            parameters: [
                AoE2AIParameterTypes.BUILDING
            ]
        }
    ],
    "can-build": [
        {
            label: "(can-build <building>)",
            documentation: "This fact checks whether the computer player can build the given building. In particular it checks: \n 1. That the building is available to the computer player’s civilization. \n 2. That the tech tree prerequisites for building are met. \n 3. That the resources needed for the building are available, not counting escrow amounts.  \n \t The fact allows the use of building line wildcard parameters for the <building>",
            parameters: [
                AoE2AIParameterTypes.BUILDING
            ]
        }
    ],
    "can-train": [
        {
            label: "(can-train <unit>)",
            documentation: "This fact checks if the training of the given unit can start. In particular it checks: \n 1. That the unit is available to the computer player's civilization \n 2. That the tech tree prerequisites for training the unit are met. \n 3. That resources needed for training the unit are available, not counting escrow amounts.  \n 4. That there is enough housing headroom for the unit. \n 5. That there is a building that is not busy and is ready to start training the unit. \n \n The fact allows the use of unit line wildcard parameters for the <unit>.  ",
            parameters: [
                AoE2AIParameterTypes.UNIT
            ]
        }
    ],
    "unit-type-count-total": [
        {
            label: "(unit-type-count-total <unit> <rel-op> <value>)",
            documentation: "This fact checks the computer player's total unit count. The total includes trained and queued units of the given type. \n The fact allows the use of unit line wildcard parameters for the <unit>. ",
            parameters: [
                AoE2AIParameterTypes.UNIT,
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.VALUE_INT
            ]
       
        }
    ],
    "building-type-count-total": [
        {
            label: "(building-type-count-total  <building> <rel-op> <value>)",
            documentation: "This fact checks the computer player's total building count. The total includes existing and \nqueued buildings of the given type.\n The fact allows the use of building line wildcard parameters for the <building>.",
            parameters: [ 
                AoE2AIParameterTypes.BUILDING,
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "current-age":[
        {
            label:"(current-age  <rel-op> <age>)",
            documentation: "This fact checks computer player’s current age.",
            parameters: [
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.AGE
            ]
        }
    ],
    "housing-headroom": [
        {
            label: "(housing-headroom  <rel-op>  <value>)",
            documentation: "This fact checks computer player’s housing headroom. Housing headroom is the difference between current housing capacity and trained unit capacity. For example, a computer player has a Town Center (capacity 5), a House (capacity 5) and 6 villagers. In this case, housing headroom is 4.",
            parameters: [
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "idle-farm-count":[
        {
            label: "(idle-farm-count  <rel-op>  <value>)",
            documentation: "This fact checks a computer player’s idle farm count – the number of farms with no farmers. It should be used before a new farm is built to make sure it is needed.",
            parameters:[
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.VALUE_INT
            ]

        }
    ],
    "population-headroom": [
        {
            label: "(population-headroom  <rel-op>  <value>)",
            documentation: "This fact checks the computer player’s population headroom. Population headroom is the difference between the game’s population cap and current housing capacity. For example, in a game with a population cap of 75, the computer player has a town center (capacity 5) and a house (capacity 5). In this case population headroom is 65.",
            parameters: [
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "attack-now": [
        {
            label: "(attack-now)",
            documentation: "This action forces attack with currently available military units.",
            parameters:[

            ]
        }
    ],
    "can-research": [
        {
            label: "(can-research <research-item>)",
            documentation: "This fact checks if the given research can start. In particular it checks: \n 1. That the research item is available to the computer player's civilization. \n 2. That the tech tree prerequisites for research are met. \n 3. That resources needed for research are available, not counting escrow amounts. \n 4. That there is a building that is not busy and is ready to start research. ",
            parameters: [
                AoE2AIParameterTypes.RESEARCH_ITEM
            ]
        }
    ],
    "research-available": [
        {
            label:"(research-available  <research-item>)",
            documentation:"The fact checks that the given research is available to the computer player's civ, and that the research is available at this time (tech tree prerequisites are met). The fact does not check that there are enough resources to start researching. ",
            parameters: [
                AoE2AIParameterTypes.RESEARCH_ITEM
            ]
        }
    ],
    "release-escrow":[
        {
            label: "(release-escrow  <resource-type>)",
            documentation: "This action releases the computer player's escrow for a given resource type.",
            parameters: [
                AoE2AIParameterTypes.RESOURCE_TYPE
            ]
        }
    ],
    "resource-found":[
        {
            label: "(resource-found <resource-type>)",
            documentation: "This fact checks whether the computer player has found the given resource.\nThe facts should be used at the beginning of the game. Once it becomes true for a certain resource it\n stays true for that resource. In *this* context, food refers to a forage site and wood is refers to forest trees (not lone trees).",
            parameters: [
                AoE2AIParameterTypes.RESOURCE_TYPE
            ]
            
        }
    ],
    "set-strategic-number":[
        {
            label: "(set-strategic-number <strategic-number>  <value>)",
            documentation: "This action sets a given strategic number to a given value.",
            parameters:[
                AoE2AIParameterTypes.STRATEGIC_NUMBER,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "dropsite-min-distance":[
        {
            label: "(dropsite-min-distance <resource-type> <rel-op> <value>)",
            documentation: " This fact checks computer player’s minimum dropsite walking distance for a given resource \n type. Long walking distances indicate a need for a new dropsite. \n It is not recommended to use this fact for building of first dropsites necessary for age \n advancement. If, at the beginning, the resources happen to be close enough to the Town Center, \n building of the first dropsites will be delayed, resulting in slower age progression. ",
            parameters:[
                AoE2AIParameterTypes.RESOURCE_TYPE,
                AoE2AIParameterTypes.RELATIONAL_OPERATOR,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "set-escrow-percentage":[
        {
            label: "(set-escrow-percentage  <resource-type>  <value>)",
            documentation: "This action sets the computer player's escrow percentage for a given resource type. \nGiven values have to be in the range 0-100. ",
            parameters:[
                AoE2AIParameterTypes.RESOURCE_TYPE,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "enable-wall-placement": [
        {
            label: "(enable-wall-placement <perimeter>)",
            documentation: "This action enables wall placement for the given perimeter. Enabled wall placement causes the rest of the placement code to do some planning and place all structures at least one tile away from the future wall lines. If you are planning to build a wall, you have to explicitly define which perimeter wall you plan to use when the game starts. This is a one-time action and should be used during the initial setup. ",
            parameters:[
                AoE2AIParameterTypes.PERIMETER
            ]
        
        }
    ],
    "can-buy-commodity": [
        {
            label: "(can-buy-commodity <commodity>)",
            documentation: "This fact checks whether the computer player can buy one lot of the given commodity. \nThe fact does not take into account escrowed resources. ",
            parameters:[
                AoE2AIParameterTypes.COMMODITY
            ]

        }
    ],
    "can-sell-commodity": [
        {
            label: "(can-sell-commodity <commodity>)",
            documentation: "This fact checks whether the computer player can sell one lot of the given commodity. \nThe fact does not take into account escrowed resources. ",
            parameters:[
                AoE2AIParameterTypes.COMMODITY
            ]

        }
    ],
    "set-goal": [
        {
            label: "(set-goal <goal-id> <value>)",
            documentation: "This action sets a given goal (a number) to a given value.",
            parameters: [
                AoE2AIParameterTypes.VALUE_GOAL,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "goal":[
        {
            label:"(goal <goal-id> <value>)",
            documentation: "This fact checks what the given goal is.",
            parameters: [
                AoE2AIParameterTypes.VALUE_GOAL,
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "enable-timer":[
        {
            label:"(enable-timer <timer-id> <value>)",
            documentation: "This action enables the given timer and sets it to the given time interval.",
            parameters: [
                AoE2AIParameterTypes.VALUE_TIMER, 
                AoE2AIParameterTypes.VALUE_INT
            ]
        }
    ],
    "disable-timer":[
        {
            label: "(disable-timer <timer-id>)",
            documentation: "This action disables the given timer.",
            parameters: [
                AoE2AIParameterTypes.VALUE_TIMER
            ]
        }
    ],
    "timer-triggered":[
        {
            label: "(timer-triggered <timer-id>)",
            documentation: "This fact checks whether a given timer has triggered. For disabled timers this fact is always false.\n The check can be performed any number of times until the timer is explicitly disabled.",
            parameters: [
                AoE2AIParameterTypes.VALUE_TIMER
            ]

        }
    ]
   
};

export default Signatures;