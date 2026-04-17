'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div ref={ref}>
        <h1>Premium Catfish. Naturally Grown.</h1>
      </div>
    </section>
  )
}