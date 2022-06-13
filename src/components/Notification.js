const Notification = ({ notification }) => {
  if (!notification.msg) return null

  const { msg, type } = notification

  const style = type === "success" ? "bg-lime-300/50" : "bg-red-300/80"

  return (

    <div
      className={`${style} z-50 rounded-md px-5 py-2 top-10 absolute left-1/2 -translate-x-1/2 whitespace-nowrap`}
    >
      <p>{msg}</p>
    </div>
  )
}

export default Notification
