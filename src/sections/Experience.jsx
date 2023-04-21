import { useEffect, useState } from "react"

export function Experience(props){
    const [experiences, setExperiences] = useState([]);

    useEffect(()=> {
        async function getExperience(){
            var res = await fetch("http://console.shavinsingh.tech/api/experiences");
            var data = await res.json();
            setExperiences(data);
        }

        getExperience();
    },[])

    const toDate = date => {
        var newDate = new Date(date).toDateString().split(' ');
        var month = newDate[1];
        var year = newDate[3];
        return month + ' ' + year;
    }
    return (
        <section id={props.id} className="wrapper spaced">
            <h2>My Experience</h2>
            <div className="card-grid">
                {
                    experiences ?
                    experiences.map((exp) => {
                        return (
                            <div className="card">
                                <div class="card-head">
                                    <img src={exp.image ?? '#'} alt={exp.title}/>
                                </div>
                                <div className="card-body">
                                    <p>{exp.company}</p>
                                    <h3>{exp.title}</h3>
                                    <p>{toDate(exp.start_date) + " - " + toDate(exp.end_date)}</p>
                                    <p className="card-content">{exp.content}</p>
                                </div>
                            </div>
                        )
                    })
                    : null
                }
            </div>
        </section>
    )
}