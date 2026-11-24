import PageHeader from "../text/PageHeader"
import Row from "../general/Row"

const ReportText = ({ text, loading}) => {
    return (
        <Row>
            <PageHeader header={text} loading={loading}/>
        </Row>
    )
}

export default ReportText
