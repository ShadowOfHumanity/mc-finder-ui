"use client"

import { useState } from "react"
import { Country } from "./lib/types/Country"
import Hero from "./components/Hero"

const page = () => {
  const [selectedCountry, selectedCountrySet] = useState<Country | null>(null)

  return (
    <main>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
        {/* hero */}
        <Hero />

        <div>
          <section className="flex flex-col items-center">
            {/* Country Selector here... */}
          </section>
        </div>


      </div>
    </main>
  )
}

export default page