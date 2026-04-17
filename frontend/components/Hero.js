'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2 }
    )
  }, [])

  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <div ref={ref}>
        <h1 className="text-5xl font-bold text-primary">
          Premium Catfish. Naturally Grown.
        </h1>
        <p className="mt-4 text-gray-600">
          Export-grade aquaculture experience
        </p>
      </div>
    </section>
  )
}
