import { useEffect, useState } from "react";
import ProjectSlide from "../components/ProjectSlide";

export default function Projects(props){

    const [index, setIndex] = useState(0);
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        async function getProjects(){
            var res = await fetch('https://console.shavinsingh.tech/api/projects');
            var data = await res.json();
            setProjects(data);

        }

        getProjects();
    },[]);

    // renders a pip for each project, clicking on the pip jumps to the selected project
    function pagination(){
        var btns=[];
        for(let i=0; i<projects.length;i++){
            btns.push(<button class={"btn-paginate" + (index == i ? ' active':'')}  onClick={()=>setIndex(i)}></button>);
        }
        return (
            <>
            {
                btns
            }
            </>
        )
    }

    return (
        <section id={props.id}>
            <div class="spaced">
                <div class="wrapper">
                    <h2>My Projects</h2>
                </div>
                <div class="project-slides">
                    {
                        // render if projects have been recieved
                        projects.length > 0 ?
                        <ProjectSlide  {...projects[index]} />
                        : null
                    }
                </div>
                <div class="pagination">
                {pagination()}
                </div>
                <div class="wrapper spaced-sm">
                    <h2>My Collection</h2>
                    <p>Discover my collection of utilities exclusively designed to enrich your <strong>Tabletop Roleplaying (TTRPG)</strong> experience for a variety of game systems from <strong>Blades in the Dark</strong> to <strong>Honey Heist.</strong></p>
                </div>
                <div className="banner">
                    <a className="banner-link" href="http://singhmansingh.games/" target="_blank">Singhmansingh.games</a>
                </div>
            </div>
        </section>
    )
}