import { InfoSection } from "../styles/Info.styled";
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

const Info = () => {
    return (
        <InfoSection>
            <div>
                <span>
                    <FaHome />
                </span>
                <p>123 Street, Shahra-e-Faisal, Karachi</p>
            </div>
            <div>
                <span>
                    <FaPhone />
                </span>
                <p>+12345678910</p>
            </div>
            <div>
                <span>
                    <FaEnvelope />
                </span>
                <p>abc@gmail.com</p>
            </div>
        </InfoSection>
    )
}

export default Info