import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-emerald-400 sm:text-7xl">
            MC Finder
        </h1>

        <p className="mb-8 max-w-xl text-base text-zinc-400">
            Find active Minecraft Servers in your region with ease!
        </p>
    </div>
  )
}

export default Hero