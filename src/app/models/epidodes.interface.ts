export type Episodes = {
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
    readonly id?:         number;
    readonly name?:       string;
    readonly airDate?:    string;
    readonly episode?:    string;
    readonly characters?: string[];
    readonly url?:        string;
    readonly created?:    Date;
}