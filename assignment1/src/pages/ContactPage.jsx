/* TODO: useEffect for delayed thank you message or
*   bring back to home page and toastify */

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./ContactPage.css";

export default function ContactPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: ""
    });


    const handleChange = (e) => {
        const {name, value} = e.target; // get event target object. deconstruct into name and value
        // set form data using previous state. in this case,
        // ...prev is using the spread operator to get all key-value pairs from
        // previous state object by creating shallow copy
        // add in new key-value pair: name: value (or overwrites if exists)
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page reload when submitting form
        navigate("/"); // goes to home page
    }

    return (
        <div className="contact">
            <form className="contact__form" onSubmit={handleSubmit}>
                <label className="contact__form-label t3">Let's get in touch!</label>
                <input className="contact__form-firstName body--main"
                       type="text"
                       name="firstName"
                       placeholder="First Name"
                       value={formData.firstName}
                       onChange={handleChange}
                       required
                />
                <input className="contact__form-lastName body--main"
                       type="text"
                       name="lastName"
                       placeholder="Last Name"
                       value={formData.lastName}
                       onChange={handleChange}
                       required
                />
                <input className="contact__form-phoneNumber body--main"
                       type="tel"
                       name="phoneNumber"
                       placeholder="Phone Number"
                       value={formData.phoneNumber}
                       onChange={handleChange}
                />
                <input className="contact__form-email body--main"
                       type="email"
                       name="email"
                       placeholder="Email Address"
                       value={formData.email}
                       onChange={handleChange}
                       required
                />
                <textarea className="contact__form-message blockquote"
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                />
                <button className="contact__form-send h6" type="submit">Send</button>
            </form>
        </div>

    );
}