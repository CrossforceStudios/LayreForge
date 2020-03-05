import { ParameterInformation } from "vscode-languageserver";

export class AoE2AIParameterTypes {
    public  static readonly BUILDING: ParameterInformation = {
        label: "<building>",
        documentation: "The building you want your AI to build or query about."
    };
    public static readonly RELATIONAL_OPERATOR: ParameterInformation = {
        label: "<relOp>",
        documentation: "A relational operator (e.g. greater-than (>), less-than (<), equal (==), etc)."
    };
    public static readonly VALUE_INT: ParameterInformation = {
        label: "<value>",
        documentation: "A string or integer (in this case, it's an integer)."
    };
    public static readonly VALUE_GOAL: ParameterInformation = {
        label:"<goal-id>",
        documentation: "A valid goal id. Goal ids have a range from 1 to 40."
    };
    public static readonly STRATEGIC_NUMBER: ParameterInformation = {
        label: "<strategic-number>",
        documentation: "A number that can be used to manage certain aspects of your AI's empire (i.e. who explores the map, who does the farming, etc.)."
    };
    public static readonly RESEARCH_ITEM: ParameterInformation = {
        label: "<research-item>",
        documentation: "The research technology you wish to unlock (i.e. ri-wheel-barrow)."
    };
    public static readonly RESOURCE_TYPE: ParameterInformation = {
        label: "<resource-type>",
        documentation: "Wood, food, gold or stone?"
    };
    public static readonly AGE: ParameterInformation = {
        label: "<age>",
        documentation: "Dark, Feudal, Castle, Imperial or Post-Imperial?"
    };
    public static readonly UNIT: ParameterInformation = {
        label: "<unit>",
        documentation: "The unit type you want to train or query about."
    };
    public static readonly PERIMETER: ParameterInformation = {
        label: "<perimeter>",
        documentation: "A valid wall perimeter. Allowed values are 1 and 2, with 1 being closer to the Town Center than 2. \n \t Perimeter 1 is usually between 10 and 20 tiles from the starting Town Center. \n \t Perimeter 2 is usually between 18 and 30 tiles from the starting Town Center. "
    };
    public static readonly COMMODITY: ParameterInformation = {
        label: "<commodity>",
        documentation: "Same parameter type as <resource-type>, but used for trade only."
    };

    public static readonly FACT: ParameterInformation = {
        label: "<fact>",
        documentation: "Any fact that is valid."
    };

    public static readonly VALUE_TIMER: ParameterInformation = {
        label: "<timer-id>",
        documentation: "A valid timer id (range 1-10)"
    };
};