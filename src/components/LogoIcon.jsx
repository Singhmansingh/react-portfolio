export default function LogoIcon(props){
    return (
        <div className="logo-icon" >
            
        <a href={props.url}  target="_blank" >
            <img style={{filter: "drop-shadow(0 0 20px "+props.color+")"}}  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558" ?? props.url}  alt={props.title}/>
        </a>
        </div>
    )
}