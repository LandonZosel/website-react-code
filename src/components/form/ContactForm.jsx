import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import FormHeader from './FormHeader'
import FormInput from './FormInput'

import './ContactForm.css'

const ContactForm = () => {
    const [text, setText] = useState('');

    async function submitToDatabase(name, email, message) {
        try {
            if ((typeof name === 'string') && (typeof email === 'string') && (typeof message === 'string')) {
                const docRef = await addDoc(collection(db, "forms"), {
                    name: name,
                    email: email,
                    message: message
                });
                return docRef;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    //called when the form is submitted
    const formSubmitted = async (e) => {
        //prevent page refresh when form submitted
        e.preventDefault();

        const formData = new FormData(e.target);
        //grab all data for inputs in form
        const data = Object.fromEntries(formData.entries());

        //populate fields
        var nameText = data['nameField'];
        var emailText = data['emailField'];
        var messageText = data['messageField'];

        //clear helper text
        setText("");

        if (nameText.length === 0 || emailText.length === 0 || messageText.length === 0) {
            //dont submit but tell user why
            setText("Please fill out all fields.");
            return;
        } else {
            //submit to database
            var dbResult = await submitToDatabase(nameText, emailText, messageText);

            if (dbResult === null) {
                //uh oh something went wrong, tell user why
                setText("Error with database submission, please try again later.");
                return;
            } else {
                //clear values
                nameField.value = '';
                emailField.value = '';
                messageField.value = '';

                //show helper text to indicate completion
                setText("Form Submitted!");
            }
        }
    }

    return (
        <form className="formContainer" onSubmit={formSubmitted}>
            <FormHeader field="nameField" header="Name:"/>
            <FormInput id="nameField"/>
            <FormHeader field="emailField" header="Email:"/>
            <FormInput id="emailField"/>
            <FormHeader field="messageField" header="Message:"/>
            <textarea id="messageField" name="messageField" className="largeInput"></textarea>
            <button className="navButton" type="submit">Submit</button>
            <p>{text}</p>
        </form>
    )
}

export default ContactForm
