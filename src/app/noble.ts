export interface Noble {
    level: 1 | 2 | 3;
    points: number;
    cost: {
        Emerald: number;
        Sapphire: number;
        Ruby: number;
        Diamond: number;
        Onyx: number;
    }
}
