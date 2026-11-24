import './FormInput.css'

const FormInput = ({id}) => {
    return (
        <input type="text" id={id} name={id} className="smallInput"/>
    )
}

export default FormInput
