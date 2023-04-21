export default function Landing(props){
    return (
        <section id={props.id}>
            <div className="wrapper">
                <div className="logo-lg">
                    <img src="/assets/logo.svg"/>  
                </div>
                <div>
                    <p className="sm subtitle">Hi, I'm</p>
                    <h1>Shavin Singh</h1>
                    <p className="subtitle">Full Stack Developer</p>
                    <p className="sm subtitle">Toronto ON, Canada</p>
                </div>
            </div>
            
        </section>  
    )
}