import './PageTitle.css'

const PageTitle = ({title, grid}) => {
    let className = "pageTitleContainer";
    if (grid) {
        className = "gridPageTitleContainer";
    }
    return (
        <div className={className}>
            <h1>{title}</h1>
        </div>
    )
}

export default PageTitle
