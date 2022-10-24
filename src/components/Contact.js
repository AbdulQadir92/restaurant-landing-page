import MapContainer from "./contact/MapContainer";
import ContactForm from "./contact/ContactForm";

import { ContactSection } from "../styles/Contact.styled";


const Contact = () => {
    return (
        <ContactSection id="contact">
            <h1>Contact Us</h1>
            <div>
                <MapContainer />
                <ContactForm />
            </div>
        </ContactSection>
    )
}

export default Contact