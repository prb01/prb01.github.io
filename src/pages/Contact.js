import { useState } from "react"
import contactService from "../services/contactService"

const Contact = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const sitekey = process.env.REACT_APP_CAPTCHA_SITE_KEY

  const submitMessage = () => {
    window.grecaptcha.ready(async () => {
      window.grecaptcha
        .execute(sitekey, { action: "submit" })
        .then((recaptchaToken) => {
          const msgObject = {
            name,
            email,
            msg,
            "g-recaptcha-response": recaptchaToken,
          }

          contactService
            .sendMessage(msgObject)
            .then((response) => {
              props.setNotification({
                msg: "Message sent successfully!",
                type: "success",
              })
              setTimeout(() => {
                props.setNotification({})
              }, 3000)
            })
            .catch((error) => {
              props.setNotification({
                msg: error.message,
                type: "error",
              })
              setTimeout(() => {
                props.setNotification({})
              }, 3000)
            })
        })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await submitMessage()
  }

  props.loadTrigger()

  return (
    <section className="flex flex-col items-center justify-center min-h-full p-4">
      <h2 className="text-3xl xl:text-4xl text- font-bold mb-6">
        Let's work together!
      </h2>
      <form
        id="contact-form"
        className="w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-start mb-2 flex-col load zoomIn">
          <div className="">
            <label
              className="block text-main font-bold md:text-left mb-1 md:mb-0"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="">
            <input
              className="bg-offWhite focus:bg-transparent appearance-none border-2 border-lightGrey rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:border-accent"
              id="name"
              type="text"
              placeholder="First Last"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus={(window.screen.width <= 640) ? false : true}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-start mb-2 flex-col  load zoomIn">
          <div className="">
            <label
              className="block text-main font-bold md:text-left mb-1 md:mb-0"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="">
            <input
              className="bg-offWhite focus:bg-transparent appearance-none border-2 border-lightGrey rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:border-accent"
              id="email"
              type="text"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-start mb-4 flex-col load zoomIn">
          <div className="">
            <label
              className="block text-main font-bold xl:text-left mb-1 xl:mb-0"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <div className="w-full">
            <textarea
              className="bg-offWhite focus:bg-transparent h-20 xl:h-36 resize-none appearance-none border-2 border-lightGrey rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:border-accent"
              id="message"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
          </div>
        </div>
        <input
          type="hidden"
          id="g-recaptcha-response"
          name="g-recaptcha-response"
        />

        <div className="md:flex md:items-start load zoomIn">
          <div className="">
            <button
              className="bg-accent w-full xl:w-max hover:scale-105 focus:outline focus:outline-2 focus:outline-main text-white font-bold py-2 px-4 rounded active:bg-main active:scale-90 transition-all g-recaptcha"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact
