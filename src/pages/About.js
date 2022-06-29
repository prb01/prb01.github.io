import { NavLink } from "react-router-dom"

const About = () => (
  <section className="text-xl place-self-start sm:place-self-center xl:place-self-auto max-w-screen-sm px-3 mt-10 pb-10 xl:mt-0 xl:pb-0">
    <h1 className="text-3xl font-bold mb-5">
      Hej, I'm <span className="text-accent">Patrick</span>.
    </h1>
    <p className="whitespace-normal leading-normal mb-3">
      After 10yrs of working in finance as a project manager, in 2021 I
      decided to combine my loves for solving complex-problems and building
      products into a new career. Since beginning my journey as a fullstack
      web developer, I've done remote work for agencies, contributed to
      open-source projects, and collaborated with talented individuals to
      create digital products for consumer use. I'm quietly confident,
      naturally curious, and possess the tenacity of a terrier when trying
      to solve problems.
    </p>
    <NavLink
      to="/contact"
      className="
        flex justify-center font-bold text-2xl text-accent hover:text-main hover:scale-110 transition-smooth"
    >
      Let's work together!
    </NavLink>
  </section>
)

export default About
