import ButtonSendEmail from '../components/ui/ButtonSendEmail'

export default function Contact() {
    return (
        <div className="flex flex-row mt-6">
            <form className='flex flex-col mb-6 grow'>

                <label className="text-white mb-1" htmlFor="contact-email-subject">Subject</label>

                <input className="border mb-2 text-white rounded" type="text" id="contact-email-subject" />

                <label className="text-white mb-1" htmlFor="contact-email-message">Message</label>

                <textarea className="border mb-4 text-white rounded" name="contact-email-message" id="contact-email-message" defaultValue={""} />

                <ButtonSendEmail />
            </form>
            <div className='flex-1'>

            </div>
        </div>
    )
}