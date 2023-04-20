import LogoIcon from "./LogoIcon";

export default function LogoIconDisplay(props){
    return (
        <div class="logo-icon-grid">
            { props.icons.map((icon,index)=> <LogoIcon key={icon.title ?? index} src={icon.image ?? "#"} url={icon.url ?? "#"} title={icon.title ?? "Ex"} color={icon.color ?? "red"}/>) }
        </div>
    )
}