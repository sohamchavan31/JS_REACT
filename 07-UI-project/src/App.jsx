import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam?',
      tag: 'Satisfied',
      color:"red"
    },
    {
      img : "https://imgs.search.brave.com/XRGpYaDONWi9NeKuRjeNb3tLu7JcACluIYHzCU7mMH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MTQwNDE2NC9waG90/by9ib2xseXdvb2Qt/YWN0cmVzcy1hZGl0/aS1yYW8taHlkYXJp/LXBvc2VzLWZvci1w/aG90b3MtYXMtc2hl/LWFycml2ZXMtdG8t/YXR0ZW5kLXRoZS13/ZWRkaW5nLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XeWtx/eXFBVk5mcERQdHJs/bjBLMzY3UGNrUDJZ/NUNpd2NrNEhCeUlJ/ZlhBPQ",
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sequi quos voluptatibus sint.',
      tag: 'Aditi Rao',
      color:"green"
    },
    {
      img : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi reprehenderit distinctio.',
      tag: 'Underserved',
      color:"grey"
    },
    {
      img : "https://imgs.search.brave.com/s4IaC6t_TyZzFzLTzaGwhgGiyjAdWXFYUZce89-f5so/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDA2NDQ1Ni9waG90/by9ib2xseXdvb2Qt/YWN0cmVzcy1hbmFu/eWEtcGFuZGV5LXBv/c2VzLWZvci1hLXBo/b3RvLWR1cmluZy10/aGUtc2FuZ2VldC1j/ZXJlbW9ueS1vZi1h/bmFudC1hbWJhbmku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWpaenpJanpfb1FG/cmlsYnlWOTZHWDRO/Nl9FczVpTmt5dUtK/MEV0NHhSZ0E9",
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sequi quos voluptatibus sint.',
      tag: 'Ananya Panday',
      color:"black"
    },
    {
    img : "https://plus.unsplash.com/premium_photo-1683134150961-4c11a2d6f0bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sequi quos voluptatibus sint.',
      tag: 'Underbanked',
      color:"blue"
    },
    {
      img : "https://imgs.search.brave.com/fwXlcAOT7G0DO1wXGtwAsUx94RY5GP9vOE-FITnpNkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/MzcyNjIyMy9waG90/by9qYWlwdXItaW5k/aWEtYm9sbHl3b29k/LWFjdHJlc3Mta2F0/cmluYS1rYWlmLXBv/c2VzLWFzLXNoZS1h/cnJpdmVzLW9uLXRo/ZS1ncmVlbi1jYXJw/ZXQtdG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVF0UC1N/WHN0Z0NQeHpZQ09Q/Ti1mNDVJTTRmdV9z/bEd3Q1pQN1NLNmt4/ZVU9",
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sequi quos voluptatibus sint.',
      tag: 'Katrina Kaif',
      color:"orange"
    },
  ]
  return (
    <>
      <Section1 users = {users}/>
      <Section2 />
    </>
  )
}

export default App
