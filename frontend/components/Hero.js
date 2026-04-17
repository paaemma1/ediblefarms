'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary to-aqua text-white">
      <div ref={ref} className="text-center px-6">
        
        <h1 className="hero-text text-4xl md:text-6xl font-semibold leading-tight">
          Premium Catfish.
          <br /> Naturally Grown.
          <br /> Perfectly Delivered.
        </h1>

        <p className="hero-text mt-6 text-lg opacity-80">
          Export-grade aquaculture experience for homes, restaurants, and global markets.
        </p>

        <div className="hero-text mt-8 flex gap-4 justify-center">
          <button className="bg-white text-primary px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Order Fresh Fish
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition">
            Visit Our Farm
          </button>
        </div>

      </div>
    </section>
  )
}
