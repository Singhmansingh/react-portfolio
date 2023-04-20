export default function ProjectSlide(props){
    return (
        <div className="slide">
            <div className="slide-image" style={{backgroundImage:"url(https://picsum.photos/500)"}}></div>
            <div className="slide-content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="slide-button"><button>Visit</button></div>
            </div>
        </div>
    );
}