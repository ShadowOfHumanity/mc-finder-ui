export interface Country {
    name: CountryName;
    population: number;
    cca2: string; // cca2 is the country code
    flag: string;
}

export interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [key: string]: { // this is to get in a specific language, in this case always english for example.
            common: string;
            official: string;
        }
    }
}