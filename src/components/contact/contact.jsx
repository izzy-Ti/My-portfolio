import react from 'react'
import './contact.css'
import segment from './../../assets/segment.png'

function Contact(){
      const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e7f12a9c-365f-4670-809e-eb5384a65aea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
    return(
        <div className='contact' id='contact'>
            <div className="contact_title">
                <h1>Get in Touch</h1>
                <img src={segment} alt="" height='130'/>
            </div>
            <div className="contact_section">
                <div className="contact_left">
                    <h1>Let's talk</h1>
                    <p>I'M currently available to new projects, so feel free to send me a message about any thing that you want me to work on. You can contact me any time.</p>
                    <div className="contact_details">
                        <div className="contact_detail">
                            <i class="fa-solid fa-envelope"></i> <p>Israelashenafi29@gmail.com</p>
                        </div>
                        <div className="contact_detail">
                            <i class="fa-solid fa-phone-volume"></i> <p>+251 992 013 392</p>
                        </div>
                        <div className="contact_detail">
                            <i class="fa-solid fa-location-dot"></i><p>Ethiopia, Addis ababa, Asko</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contatc_right">
                    <lable>Your Name</lable>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <lable>Your Email</lable>
                    <input type="email" placeholder='Enter your Email' name='email'/>
                    <lable>Write a message here</lable>
                    <textarea name="message" rows='8' placeholder='Enter your message here'></textarea>
                    <button type='submit' className='contact_submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
}
export default Contact