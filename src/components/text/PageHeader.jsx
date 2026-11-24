import './PageHeader.css'

const PageHeader = ({header, centered, loading}) => {
    var classList = "pageHeaderContainer";
    
    if (centered) {
        classList += " centerHeader";
    }

    if (loading) {
        classList += " loading";
    }

    return (
        <div className={classList}>
            <h2>{header}</h2>
        </div>
    )
}

export default PageHeader
