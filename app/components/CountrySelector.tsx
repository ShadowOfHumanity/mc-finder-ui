"use client";

import { useEffect, useState } from "react";
import { Country } from "../lib/types/Country";
import { fetchCountries } from "../lib/Hooks/FetchHooks/FetchCountries";

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
            try { // we have to implement this, a hook!
                const data = await fetchCountries(); // 
                const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setCountries(sorted);
            } catch (err) {
                setError("Failed to load countries.");
            } finally {
                setLoading(false);
            }
        }
        loadCountries(); 
    }, []); // we need to somehow load the countries initially, for free!

    if (loading) {
        return (
            <div className="w-full max-w-4xl px-4 animate-fade-in-up [animation-delay:200ms]">
                <h2 className="mb-6 text-xl font-semibold text-zinc-300">Select Your Region</h2>
                <div className="flex items-center justify-center py-12">
                    <div className="text-zinc-500">Loading countries...</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full max-w-4xl px-4 animate-fade-in-up [animation-delay:200ms]">
                <h2 className="mb-6 text-xl font-semibold text-zinc-300">Select Your Region</h2>
                <div className="flex items-center justify-center py-12">
                    <div className="text-red-400">{error}</div>
                </div>
            </div>
        )
    }

  return (
        <div className="w-full max-w-6xl px-4 animate-fade-in-up [animation-delay:200ms]">
            <h2 className="mb-6 text-xl font-semibold text-zinc-300">
                Select Your Region {selectedCountry && `(${selectedCountry.name.common})`}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-h-96 overflow-y-auto p-2 rounded-lg border border-zinc-800/50 bg-zinc-900/20 custom-scrollbar">
                {countries.map((country, index) => (
                    <button
                        key={country.cca2 || index}
                        onClick={() => onCountrySelect(country)}
                        className={`group relative flex flex-col items-center justify-center gap-2 rounded-lg border p-3 transition-all hover:-translate-y-0.5 cursor-pointer ${selectedCountry?.cca2 === country.cca2
                                ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                                : 'border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-zinc-900'
                            }`}
                    >
                        <img
                            src={`https://flagsapi.com/${country.cca2}/flat/64.png`}
                            alt={`${country.name.common} flag`}
                            className="w-12 h-8 object-cover rounded shadow-sm"
                        />
                        <span className={`text-xs font-medium transition-colors text-center line-clamp-2 ${selectedCountry?.cca2 === country.cca2 ? 'text-emerald-400' : 'text-zinc-400 group-hover:text-emerald-400'
                            }`}>
                            {country.name.common}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CountrySelector