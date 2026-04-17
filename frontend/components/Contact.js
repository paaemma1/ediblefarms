'use client'
import axios from 'axios'
import { useState } from 'react'

export default function Contact(){
  const [msg,setMsg]=useState('')

  const send=async()=>{
    await axios.post('https://ediblefarms-qh4b.onrender.com/api/contact',{message:msg})
    window.open(`https://wa.me/233546600063?text=${msg}`)
  }

  return(
    <section className="py-20 bg-mist flex justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        
        <h2 className="text-2xl font-semibold mb-4">
          Contact & Orders
        </h2>

        <textarea
          placeholder="Enter your order or inquiry..."
          className="w-full p-4 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-aqua"
          onChange={e=>setMsg(e.target.value)}
        />

        <button
          onClick={send}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-aqua transition"
        >
          Send Message
        </button>

      </div>
    </section>
  )
}
