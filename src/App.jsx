import './App.css'
import Navbar from './components/Navbar'
import Landing from './sections/Landing'
import About from './sections/About'
import Projects from './sections/Projects'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'



function App() {

  const NAVBAR = [
    {
      id:"landing",
      element: function () { return <Landing id={this.id}/> }
    },
    {
      title: "About",
      id:"about",
      element: function () { return <About id={this.id}/> }

    },
    {
      title: "Experience",
      id:"experience",
      element: function () { return <Experience id={this.id}/> }

    },
    {
      title: "Projects",
      id:"projects",
      element: function () { return <Projects id={this.id}/> }

    },
    {
      title: "Contact",
      id:"contact",
      element: function () { return <Contact id={this.id}/> }

    },
  ]

  return (
    <div className="App">
      <header>
        <div className="nav-logo"><img src="https://avatars.githubusercontent.com/u/64917885?v=4"/></div>
        <Navbar locations={NAVBAR}/>
      </header>
      <main>
        {/* <Landing id={'landing'}/>
        <About id={'about'}/>
        <Projects id={'projects'}/>
        <Experience id={'experience'} />
        <Contact id={'contact'}/> */}
      {
        NAVBAR.map(section => section.element())
      }
      </main>
      <footer>Copyright Shavin Singh, 2023</footer>
    </div>
  )
}

export default App
