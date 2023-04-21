export default function LogoIcon(props){
    const imgSrc = "http://console.shavinsingh.tech/storage/"
    return (
        <div className="logo-icon" >
            
        <a href={props.url}  target="_blank" >
            <img style={{filter: "drop-shadow(0 0 20px "+props.color+")"}}  src={props.src ?? '#'}  alt={props.title}/>
        </a>
        </div>
    )
}