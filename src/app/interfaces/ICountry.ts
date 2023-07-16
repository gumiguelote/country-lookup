export interface ICountry {
  name: {
    common: string
  };
  cca2: string;
  region: string;
  population: number;
  flags:{
    png: string,
    alt: string,
  };
  languages: {};
}