export interface Page <T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

export interface NameUrlPair {
    name: string;
    url: string;
}

export interface BerryInfo {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    firmness: NameUrlPair;
    natural_gift_power: number;
    smoothness: number;
    soil_dryness: number;
    item: NameUrlPair;
    natural_gift_type: NameUrlPair;
    flavors: Flavours[];
}

export interface Flavours {
    potency: number;
    flavor: NameUrlPair;
}

export interface BerryFirmness {
    id: number;
    name: string;
    berries: NameUrlPair[];
}

