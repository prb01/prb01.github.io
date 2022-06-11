import axios from "axios"
const baseUrl = "https://formspree.io/f/mrgjdlrv"

const sendMessage = async (msgObject) => {
  const response = await axios.post(baseUrl, msgObject)
  return response.data
}

export default { sendMessage }