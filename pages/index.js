import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const[question, setQuestion] = useState('cookies')

  return (
    <div className='bg-black-500'>
      <Header/>
      <main className='bg-green-200 py-6 px-8'>
        <Form onSubmit={submitHandler} className='flex flex-col items-center'/>
      </main>
      <Footer/>
    </div>
  )
}


function Header(){
  return <header className='bg-green-500 py-6 px-8'>
    <h1>
      Cookie Stand Admin
    </h1>

  </header>
}

function Footer({ copywright }){
  return <footer className='bg-green-500 py-6 px-8'>
    <p>&copy; {copywright="2022"}</p>
  </footer>
}

function Form(props){
  return <form onSubmit={props.onSubmit}>
    <h2>Create Cookie Stand</h2>
    <p>Location</p>
      <input placeholder='location name' required/>
    <p>Minimum Customer per Hour</p>
    <input placeholder='Min Cust PH' required/>
    <p>Maximum Customer per Hour</p>
    <input placeholder='Maxi Cust PH' required/>
    <p>Average Cookies per Sale</p>
    <input placeholder='Avg Cookies per Sale' required/>
    <button className='px-4 py-30 bg-blue-300'>Create</button>
    <p>Report Table coming Soon...</p>
    </form>
}

function submitHandler(event){
  event.preventdefault();
  {/* <p>"{"location":"Barcelona", "minCustomers":2, "maxCustomers":4, "avgCookies":2.5}"</p> */}
  alert("Submitted")
}