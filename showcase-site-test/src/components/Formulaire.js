import {useRef} from "react";
import emailjs from '@emailjs/browser';

export const Formulaire = () => {
    const form = useRef();

    const sendEmail = (e) => {
        const formMessage = document.querySelector(".form-message");
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_ID,
            'template_3n8bdn7',
            form.current,
            process.env.REACT_APP_KEY_PUBLIC )
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                formMessage.style.color = "Green";
                formMessage.innerHTML = "<p class='success'>Votre message a bien été envoyé !</p>";
                setTimeout(() => {
                    formMessage.innerHTML = "";
                }, 3000);
            }, (error) => {
                console.log(error.text);
                formMessage.style.color = "Red";
                formMessage.innerHTML = "<p class'error'>Une erreur est survenue !</p>";
                setTimeout(() => {
                    formMessage.innerHTML = "";
                }, 3000);
            });
    };

    return (
        <div className="form-container">
            <h2> Contactez-nous </h2>
            <form ref={form} onSubmit={sendEmail} className='form-content'>
                <label>Nom</label>
                <input type="text" name="name"/>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Message</label>
                <textarea name="message" id="mess"/>
                <input type="submit" value="Envoyer" className='hover button'/>
            </form>
            <div className="form-message"></div>
        </div>
    );
};

export default Formulaire;