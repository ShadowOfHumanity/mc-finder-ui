
// we need a API object.. axios..but i need one for OUR api & other APIs.. i dont want to rewrite calls!
// https://restcountries.com/v3.1/all

import { Country } from "../../types/Country";
import { createAxiosInstance } from "../../util/AxiosInstance";

const countryApi = createAxiosInstance("https://restcountries.com/v3.1/") 
export const fetchCountries = async () => {
    try {
        const response = await countryApi.get<Country[]>("/all", {
            params: {
                fields: "name,population,cca2,flag"
            }
        })
        return response.data;
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
}