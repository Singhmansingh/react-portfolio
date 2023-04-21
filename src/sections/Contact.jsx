import Carousel from "../components/Carousel";
import { FormInput } from "../components/FormInput";
import LogoIconDisplay from "../components/LogoIconDisplay";

export function Contact(props){
    const SOCIALS = [
        {
            title: "Github",
            image: "/assets/icons/github.png",
            color: "#9c9c9c"
        },
        {
            title: "Facebook",
            image: "/assets/icons/facebook.png",
            color: "#1278d4"
        },
        {
            title: "Instagram",
            image: "/assets/icons/instagram.webp",
            color: "magenta"
        },
        {
            title: "LinkedIn",
            image: "/assets/icons/linkedin.webp",
            color: "#00679d"
        },

    ]
    return(
        <section id={props.id} className="wrapper ">
            <div>
                <h2>Get Connected</h2>
                <p>Let's Connect! Drop me a message and let's bring your ideas to life.</p>
                <form className="contact-form" action="#" method="post">
                    <FormInput id="fname" label="Your Name" name="fname"/>
                    <FormInput id="org" label="Organization" name="org"/>

                    <FormInput id="email" label="Email" name="email"/>
                    <FormInput id="phone" label="Phone Number" name="phone"/>
                    <FormInput id="subject" label="Subject Line" name="subject"/>
                    <FormInput id="message" label="Message" name="message" rows="5"/>
                    <div style={{gridArea:"button"}} className="form-send">
                        <input className="btn" type="submit" value={"Send"}/>
                    </div>
                </form>
            </div>
            <div className="spaced-sm" >
                <h2>Stay Connected</h2>
                <p>Join Me on my digital journey! Find me on GitHub, Instagram, and more.</p>
                <LogoIconDisplay icons={SOCIALS}/>
            </div>
        </section>
    )
}