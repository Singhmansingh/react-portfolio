import ProjectSlide from "../components/ProjectSlide";

export default function Projects(props){
    return (
        <section id={props.id}>
            <div class="wrapper">
                <h2>My Projects</h2>
            </div>
            <div class="project-slides">
                <ProjectSlide/>
            </div>
        </section>
    )
}