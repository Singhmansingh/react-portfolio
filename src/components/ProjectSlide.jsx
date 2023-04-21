// Slide component for projects. renders an image, title and description, and a link to either read more or visit
export default function ProjectSlide(props){
    console.log(props.many_skills);

    function renderSkills(){
        var message;
        message += props.many_skills.map(skill=> skill.title).join(', ');
        return message;

    }
    return (
        <div className="slide">
            <div className="slide-image"><img src={props.image} alt=""/></div>
            <div className="slide-content">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <p>{renderSkills()}</p>
                <div className="slide-button"><a href={props.url} target="_blank" className="btn">Visit</a></div>
            </div>
        </div>
    );
}