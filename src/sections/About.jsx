import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import LogoIconDisplay from "../components/LogoIconDisplay";
export default function About(props){
    const [icons, setIcons] = useState([]);
    useEffect(()=>{
        async function getIcons(){
            var response = await fetch("http://console.shavinsingh.tech/api/skills");
            
            var _icons = await response.json();
            console.log(_icons);
            setIcons(_icons);
        }
        
       getIcons();
    },[]);


    const items = [
        "http://singhmansingh.games/images/everyone-is-john.png",
        "http://singhmansingh.games/images/the-witch-is-dead.png",
        "http://singhmansingh.games/images/adventure-skeletons.png",
        "http://singhmansingh.games/images/goblin-punks.png",
        "http://singhmansingh.games/images/lasers-and-feelings.png",
        "http://singhmansingh.games/images/honey-heist.png",
        "http://singhmansingh.games/images/outbreak-undead.png",
        "http://singhmansingh.games/images/ten-candles.png"
    ]

    return(
        <section id={props.id} className="spaced">
            <div id="myVision">
                <div className="wrapper">

                <p className="subtitle">My Vision</p>
                <h2>Make Technology Accessible for All</h2>
                <p>With a background in <strong>Business Technology Management</strong>, <strong>Web Development</strong> and <strong>Computer Science</strong>, I aim to make complex systems more accessible and user-friendly for everyone, regardless of their technical background.</p>

                </div>
                {/* <Carousel items={items}/> */}
            </div>
        <div id="myMission" className="wrapper spaced">

            <p className="subtitle">My Mission</p>
                <h2>Drive Innovation through Continuous Learning</h2>
                <p>I'm always on the lookout for chances to learn and develop myself. Learning is a hobby of mine, and I'm passionate about expandind my developer toolbelt. and trying new things. I find it exciting to experiment with <strong>emerging technologies</strong>, <strong>the newest frameworks</strong>, and <strong>modern design patterns</strong> to enhance my skills and develop innovative solutions for my clients.</p>
                <LogoIconDisplay icons={icons}/>
            </div>
        </section>
    )
}