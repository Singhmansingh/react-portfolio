import { useState } from "react";
import ProjectSlide from "../components/ProjectSlide";

export default function Projects(props){

    const [index, setIndex] = useState(1);
    const DATA = [
        {
            title: "Don't Get Got! Online",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet convallis nisi, nec volutpat tellus dictum eget. Sed pellentesque nisl pulvinar finibus euismod. Pellentesque nec pellentesque felis. Etiam semper dapibus ex sit amet venenatis. Pellentesque porttitor tincidunt eleifend semper dapibus ex sit amet venenatis. Pellentesque porttitor tincidunt eleifend."
        },
        {
            title: "10 Candles",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet convallis nisi, nec volutpat tellus dictum eget. Sed pellentesque nisl pulvinar finibus euismod. Pel"
        }
        
    ]

    function pagination(){
        var btns=[];
        for(let i=0; i<DATA.length;i++){
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
            <div class="wrapper">
                <h2>My Projects</h2>
            </div>
            <div class="project-slides">
                <ProjectSlide title={DATA[index].title} description={DATA[index].description}/>
            </div>
            <div class="pagination">
            {pagination()}
                
            </div>
        </section>
    )
}