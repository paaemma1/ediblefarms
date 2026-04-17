'use client'
import axios from 'axios'
import { useState } from 'react'

export default function Contact(){
  const [msg,setMsg]=useState('')
  const send=async()=>{
    await axios.post('http://localhost:5000/api/contact',{message:msg})
    window.open(`https://wa.me/233546600063?text=${msg}`)
  }

  return(
    <section style={{padding:'60px'}}>
      <h2>Contact</h2>
      <textarea onChange={e=>setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </section>
  )
}