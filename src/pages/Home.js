import profilePic from "../assets/img/profile.png"

const Home = () => {
  return (
    <section className="fixed left-0 bottom-0 xl:absolute xl:left-1 xl:h-full xl:flex">
      <img src={profilePic} alt="Profile resting against wall"/>
    </section>
  )
}

export default Home
