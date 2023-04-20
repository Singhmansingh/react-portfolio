import './App.css'
import Navbar from './components/Navbar'
import Landing from './sections/Landing'
import About from './sections/About'
import Projects from './sections/Projects'
import { Contact } from './sections/Contact'



function App() {

  const NAVBAR = [
    {
      title: "about",
      id:"about"
    },
    {
      title: "projects",
      link: "http://singhmansingh.games",
    },
    {
      title: "experience",
      id:"experience"
    },
    {
      title: "contact",
      id:"contact"
    },
  ]

  return (
    <div className="App">
      <header>
        <div className="nav-logo"><img src="https://avatars.githubusercontent.com/u/64917885?v=4"/></div>
        <Navbar locations={NAVBAR}/>
      </header>
      <main>
        <Landing id={'landing'}/>
        <About id={'about'}/>
        <Projects id={'projects'}/>
        <Contact id={'contact'}/>
      </main>
      <footer>Copyright Shavin Singh, 2023</footer>
    </div>
  )
}

export default App
