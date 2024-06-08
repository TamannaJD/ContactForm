import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/contactHeader/Contact'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
 
  return (
    <>
     <Navigation />
    <main className='main_container'>
    <Contact />
     <ContactForm />
    </main>
    </>
  )
}

export default App;
