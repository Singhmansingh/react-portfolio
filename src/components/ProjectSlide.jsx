export default function ProjectSlide(props){
    return (
        <div className="slide">
            <div className="slide-image"><img src={props.image} alt=""/></div>
            <div className="slide-content">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <div className="slide-button"><a href={props.url} target="_blank" className="btn">Visit</a></div>
            </div>
        </div>
    );
}