export default function LogoIcon(props){
    return (
        <div className="logo-icon" >
            
        <a href={props.url}  target="_blank" >
            <img style={{filter: "drop-shadow(0 0 10px "+props.color+")"}}  src={props.src ?? "#" }  alt={props.title}/>
        </a>
        </div>
    )
}