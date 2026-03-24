export type Diccionario = {
    readonly word?:       string;
    readonly phonetics?:  Phonetic[];
    readonly meanings?:   Meaning[];
    readonly license?:    License;
    readonly sourceUrls?: string[];
}

export type License = {
    readonly name?: string;
    readonly url?:  string;
}

export type Meaning = {
    readonly partOfSpeech?: string;
    readonly definitions?:  Definition[];
    readonly synonyms?:     string[];
    readonly antonyms?:     string[];
}

export type Definition = {
    readonly definition?: string;
    readonly synonyms?:   any[];
    readonly antonyms?:   any[];
    readonly example?:    string;
}

export type Phonetic = {
    readonly audio?:     string;
    readonly sourceURL?: string;
    readonly license?:   License;
    readonly text?:      string;
}
