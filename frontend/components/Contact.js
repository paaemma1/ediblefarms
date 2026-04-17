'use client'
import axios from 'axios'
import { useState } from 'react'

export default function Contact() {
  const [msg, setMsg] = useState('')

  const send = async () => {
    await axios.post('https://ediblefarms-qh4b.onrender.com/api/contact', {
      message: msg
    })

    window.open(`https://wa.me/233546600063?text=${msg}`)
  }

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <textarea
        className="w-full p-4 border rounded-lg"
        onChange={(e) => setMsg(e.target.value)}
      />

      <button
        onClick={send}
        className="mt-4 bg-primary text-white px-6 py-3 rounded-lg"
      >
        Send
      </button>
    </section>
  )
}
