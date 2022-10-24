import { useState } from "react";

import { FormHolder, Form } from "../../styles/contact/ContactForm.styled";


const ContactForm = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData(prevValue => ({ ...prevValue, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <FormHolder>
            <h2>Contact Form</h2>
            <Form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input type="text" placeholder="Your Name" name="name" onChange={handleChange} value={formData.name || ''} required />
                </div>
                <div>
                    <input type="text" placeholder="Subject" name="subject" onChange={handleChange} value={formData.subject || ''} required />
                </div>
                <div>
                    <textarea placeholder="Your Message" rows="8" name="message" onChange={handleChange} value={formData.message || ''} required></textarea>
                </div>
                <div>
                    <button type="submit">Send Message</button>
                </div>
            </Form>
        </FormHolder>
    )
}

export default ContactForm