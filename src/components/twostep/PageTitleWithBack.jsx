import PageTitle from '../text/PageTitle'
import Row from '../general/Row'

import './PageTitleWithBack.css'

const PageTitleWithBack = ({title, onClick}) => {
    return (
        <Row grid={true}>
            <button className="navButton gridStart" onClick={onClick}>Back</button>
            <PageTitle title={title} grid={true}/>
        </Row>
    )
}

export default PageTitleWithBack
