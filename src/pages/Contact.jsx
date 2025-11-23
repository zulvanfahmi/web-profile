import { useState } from 'react'
import ButtonSendEmail from '../components/ui/ButtonSendEmail'
import BadgeContactLogo from '../components/ui/BadgeContactLogo';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { FaMedium } from "react-icons/fa6";

export default function Contact() {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function handleClick(e) {
        e.preventDefault()

        document.getElementById('linkSendEmail').click();

        setSubject('')
        setMessage('')
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className='text-white text-4xl mt-16 mb-6'>Let's Connect!</h1>

                <p className='text-white text-sm mb-6'>you can send me email to <a className='text-lg relative inline-block cursor-pointer hover:-translate-y-0.5 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100' href="mailto:zulvanfahmi1612@gmail.com"> zulvanfahmi1612@gmail.com</a> or fill this form below</p>

                <form className='flex flex-col mb-6 grow w-2/3'>
                    <label className="text-white mb-1" htmlFor="contact-email-subject">Subject</label>

                    <input className="backdrop-blur-xl bg-white/10 shadow-2xl outline-1 px-1 outline-white/30 mb-2 text-white rounded focus:outline-2"
                        type="text"
                        id="contact-email-subject"
                        value={subject} onChange={(e) => setSubject(e.target.value)} />

                    <label className="text-white mb-1" htmlFor="contact-email-message">Message</label>

                    <textarea className="backdrop-blur-xl bg-white/10 shadow-2xl outline outline-white/30 mb-4 text-white rounded px-1 focus:outline-2" name="contact-email-message" id="contact-email-message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />

                    <ButtonSendEmail handleClick={handleClick} />

                    <a id='linkSendEmail' className='hidden' href={`mailto:zulvanfahmi1612@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}></a>

                </form>
                <div className='flex-1 text-white mb-6'>

                    <h1 className='mb-4'>You can find me also in:</h1>

                    <div className='flex flex-row justify-center gap-4'>
                        <BadgeContactLogo iconComponent={<FaLinkedin />} />
                        <BadgeContactLogo iconComponent={<FaMedium />} />
                        <BadgeContactLogo iconComponent={<FaGithub />} />
                    </div>

                </div>
            </div>
        </>
    )
}