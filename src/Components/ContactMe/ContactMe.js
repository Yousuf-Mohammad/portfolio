import "./ContactMe.css"
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import contact from "../../Image/Envelope2.gif"
function ContactMe() {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_2ml9sd4', 'template_f4dsxqo', formRef.current, 'user_1GNpKqNb9NkxWCJ0SmjKO')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                document.getElementById('text').value = '';
                document.getElementById('text2').value = '';
                document.getElementById('text3').value = '';
                document.getElementById('text4').value = '';


            }, (error) => {
                console.log(error.text);
            });

    }
    return (



        <div className="contact-wrapper row">
            <div className="contact-left col-sm-12 col-lg-12 col-xl-5 ">
                <img className="mail" src={contact} alt="" />

            </div>
            <div className=" col-sm-12 col-lg-12 col-xl-7 mt-5 box">
                <h1 className="contact-description mb-5">
                    Get in Touch!
                </h1>
                <form style={{ width: "100%" }} ref={formRef} onSubmit={handleSubmit}>
                    <input className="m-2" id="text" type="text" placeholder="Name" name="user_name" required />
                    <input className="m-2" id="text2" type="text" placeholder="Subject" name="user_subject" required />
                    <input className="m-2" type="email" id="text3" placeholder="Email" name="user_email" required /><br />
                    <textarea className="m-2" rows='5' placeholder="Message" name="message" id="text4" required /><br />
                    <button className="button2">Submit</button>
                    <br />
                    <br />
                    {done && <p className='text-success fs-3'>Thank you for your message!</p>}
                </form>
            </div>

        </div>


    )
}

export default ContactMe