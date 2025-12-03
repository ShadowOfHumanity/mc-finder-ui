"use client";

import { useEffect, useState } from "react";
import { Country } from "../lib/types/Country";

interface CountrySelectorProps {
    onCountrySelect: (country: Country) => void;
    selectedCountry: Country | null;
}

const CountrySelector = ({ onCountrySelect, selectedCountry }: CountrySelectorProps) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const data = await fetchCountries(); // we have to implement this, a hook!
                const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
                setCountries(sorted);
            } catch (err) {
                setError("Failed to load countries.");
            } finally {
                setLoading(false);
            }
        }
        loadCountries(); 
    }, []); // we need to somehow load the countries initially, for free!

  return (
    <div>

    </div>
  )
}

export default CountrySelector