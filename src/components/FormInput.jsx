
// Renders a stylistically consistant form input

export function FormInput(props){
    return(
        <div className="form-set" style={{gridArea:props.name}}>
            <label className="form-label" for={props.id}>{props.label}</label>
            {
                props.rows ?
                <textarea placeholder={props.label} 
                className="form-input" 
                id={props.id} 
                name={props.name} 
                type={props.type ?? "text"}
                rows={props.rows}
                ></textarea>
                :
                <input 
                placeholder={props.label} 
                className="form-input" 
                id={props.id} 
                name={props.name} 
                type={props.type ?? "text"}
                />
            }

        </div>
    )
}