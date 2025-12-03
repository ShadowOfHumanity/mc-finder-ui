"use client"

import { useState } from "react"
import { Country } from "./lib/types/Country"

const page = () => {
  const [selectedCountry, selectedCountrySet] = useState<Country | null>(null)

  return (
    <main>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
        {/* hero */}
        <div className="relative flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-emerald-400 sm:text-7xl">
            MC Finder
          </h1>

          <p className="mb-8 max-w-xl text-base text-zinc-400">
            Find active Minecraft Servers in your region with ease!
          </p>

        </div>


      </div>
    </main>
  )
}

export default page