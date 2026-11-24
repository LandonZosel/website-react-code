import PageTitle from '../components/text/PageTitle'
import AccountButtonList from '../components/general/AccountButtonList'

import "./Page.css"

const Account = () => {
    return (
        <main className="mainContainer">
            <PageTitle title="Account"/>
            <AccountButtonList/>
            <br/>
        </main>
    )
}

export default Account