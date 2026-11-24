import PageTitle from "../components/text/PageTitle"
import ContactForm from "../components/form/ContactForm"

import "./Page.css"

const ContactUs = () => {
    return (
        <main className="mainContainer">
            <PageTitle title="Contact Us"/>
            <ContactForm/>
        </main>
    )
}

export default ContactUs