import { Gem } from './gem.enum';

export interface DevelopmentCardData {
    points: number;
    gem: Gem;
    cost: {
        Emerald: number;
        Sapphire: number;
        Ruby: number;
        Diamond: number;
        Onyx: number;
    }
}
