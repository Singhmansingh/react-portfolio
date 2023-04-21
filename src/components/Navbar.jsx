import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// Primary navigation bar
export default function Navbar(props){
    return (
        <nav>
        <ul>
          {
            props.locations.map((nav) => {
                if(!nav.title) return;
                return(
                    <li key={nav.title}>
                        <a href={nav.link ?? '#' + nav.id} target={nav.link ? "_blank" : '_self'} >
                            {nav.title}{nav.link ? <> <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></> : null}
                        </a>
                    </li>
                )
            })
          }
        </ul>
        </nav>
    )
}