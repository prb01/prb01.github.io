import profilePic from "../assets/img/profile.webp"

const Home = () => {
  return (
    <section className="fixed left-0 -bottom-0 flex items-end h-screen -ml-5 xl:absolute xl:left-1 xl:h-full xl:w-full xl:mb-auto xl:ml-auto">
      <img
        src={profilePic}
        alt="Profile resting against wall"
        className="h-full w-full object-none object-[0%_110%]
        xl:object-contain xl:object-left-center"
      />
    </section>
  )
}

export default Home
