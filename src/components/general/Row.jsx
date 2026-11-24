import './Row.css'

const Row = ({ children, grid }) => {
    let className = "rowContainer";
    if (grid) {
        className = "gridRowContainer"
    }
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Row
