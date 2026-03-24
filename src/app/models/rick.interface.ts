export type Rick = {
    readonly info?:    Info;
    readonly results?: Result[];
}

export type Info = {
    readonly count?: number;
    readonly pages?: number;
    readonly next?:  string;
    readonly prev?:  null;
}

export type Result = {
    readonly id?:       number;
    readonly name?:     string;
    readonly status?:   "Alive";
    readonly species?:  Species;
    readonly type?:     Type;
    readonly gender?:   Gender;
    readonly origin?:   Location;
    readonly location?: Location;
    readonly image?:    string;
    readonly episode?:  string[];
    readonly url?:      string;
    readonly created?:  Date;
}

export type Gender = "Male" | "Female";

export type Location = {
    readonly name?: string;
    readonly url?:  string;
}

export type Species = "Human" | "unknown" | "Alien";

export type Type = "" | "Pickle" | "Chair" | "Clone";