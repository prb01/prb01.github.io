import { useState } from "react"
import contactService from "../services/contactService"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const msgObject = {
        name,
        email,
        msg,
      }
      console.log(msgObject)
      const response = await contactService.sendMessage(msgObject)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-full p-4">
      <h2 className="text-4xl text- font-bold mb-8">
        Let's work together!
      </h2>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-start mb-4 flex-col">
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
              placeholder="Jane Doe"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-start mb-4 flex-col">
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

        <div className="md:flex md:items-start mb-4 flex-col">
          <div className="">
            <label
              className="block text-main font-bold md:text-left mb-1 md:mb-0"
              htmlFor="email"
            >
              Message
            </label>
          </div>
          <div className="w-full">
            <textarea
              className="bg-offWhite focus:bg-transparent h-40 resize-none appearance-none border-2 border-lightGrey rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:border-accent"
              id="message"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
          </div>
        </div>

        <div className="md:flex md:items-start">
          <div className="">
            <button
              className="bg-accent hover:scale-105 focus:outline focus:outline-2 focus:outline-main text-white font-bold py-2 px-4 rounded active:bg-main active:scale-90 transition-all"
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
