import './FormHeader.css'

const FormHeader = ({field, header}) => {
    return (
        <label className="formHeader" htmlFor={field}>{header}</label>
    )
}

export default FormHeader
