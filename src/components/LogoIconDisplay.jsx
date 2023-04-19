import LogoIcon from "./LogoIcon";

export default function LogoIconDisplay(props){
    return (
        <div class="logo-icon-grid">
            { props.icons.map((icon)=> <LogoIcon key={icon.title} icon={icon.image} url={icon.url} title={icon.title} color={icon.color}/>) }
        </div>
    )
}