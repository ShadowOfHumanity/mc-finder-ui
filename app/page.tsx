"use client"

import { useState } from "react"
import { Country } from "./lib/types/Country"
import Hero from "./components/Hero"
import CountrySelector from "./components/CountrySelector"

const page = () => {
  const [selectedCountry, selectedCountrySet] = useState<Country | null>(null)

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      <div className="container mx-auto flex flex-col items-center px-4 pb-20">
        {/* hero */}
        <Hero />

        <div className="mt-10 w-full max-w-6xl space-y-20">
          <section className="flex flex-col items-center">
            {/* Country Selector here... */}
            <CountrySelector
              selectedCountry={selectedCountry}
              onCountrySelect={selectedCountrySet}
            />
          </section>
        </div>


      </div>
    </main>
  )
}

export default page