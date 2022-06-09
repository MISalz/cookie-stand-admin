import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [cookies, cstands] = useState('');

  function submitHandler(event) {
    event.preventdefault();
    cstands(event.target.cookies.value)
    event.target().reset();
  }

  return (
    <div className='bg-black-500'>
      <Header />
      <main className='bg-white py-6 px-8'>
        <Form onSubmit={submitHandler}/>
        <Response cookies={cookies} className='py-6 px-8'/>
        <Cookie_Stands className='py-6 px-8' cstands={cstands}/>
        <p className='py-6 px-8'>Report Table coming Soon...</p>
      </main>
      <Footer />
    </div>
  )
}


function Header() {
  return <header className='bg-green-600 py-6 px-8'>
    <h1 className='text-4xl py-.5 px-.5'>
      Cookie Stand Admin
    </h1>

  </header>
}

function Footer({ copywright }) {
  return <footer className='bg-green-600 py-6 px-8'>
    <p>&copy;{copywright = "2022"}</p>
  </footer>
}

function Form(props) {
  return (<form onSubmit={props.onSubmit}  className='flex flex-col items-left bg-green-300'>
    <h2>Create Cookie Stand</h2>
  <div name='cookies'>
    <div className='grid grid-cols-2 px-4 py-100 pb-4'>
      <p>Location</p>
      <input  placeholder='location name' required className='pr-4'/>
      <p></p>
    </div>

    <div className='grid gap-4 grid-cols-4 grid-rows-2 px-4 pb-4'>
      <p>Minimum Customer per Hour</p>
      <p>Maximum Customer per Hour</p>
      <p>Average Cookies per Sale</p>
      <p></p>
      <input placeholder='Min Cust PH' required />
      <input placeholder='Maxi Cust PH' required />
      <input placeholder='Avg Cookies per Sale' required />
    </div>
      <button className='px-4 py-300 bg-blue-300'>Create</button>
    </div>
  </form>)
}

function Response(props) {
  return (
  <div className='flex items-center justify-center'>{props.cookies}</div>)
}

function Cookie_Stands(props) {
  return (
    <div className='flex items-center justify-center'>{props.cstands}</div>)
  
  
}
