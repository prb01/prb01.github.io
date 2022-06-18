import projectAbraThumbnail from "../assets/img/project_abrapalabra_500x500.webp"
import projectShredThumbnail from "../assets/img/project_shredsquad_500x500.webp"
import projectTonosThumbnail from "../assets/img/project_tonoscaferewards_500x500.webp"
import logoRound from "../assets/img/logo_retro.png"

export const projects = [
  {
    name: "AbraPalabra",
    devTools: ["html", "css", "js"],
    description:
      "Responsive Wordle clone with Spanish dictionary. Features both interactive Mouse/Touch keyboard & Typing input which changes dynamically depending on guessed letters.",
    thumbnail: projectAbraThumbnail,
    img: projectAbraThumbnail,
    siteLink: "https://abrapalabra.netlify.app/",
    githubLink: "https://github.com/prb01/abrapalabra",
    demoLink: "https://vimeo.com/707821696",
  },
  {
    name: "ShredSquad",
    devTools: ["html", "css", "js", "php", "sh"],
    description:
      "Implemented dark mode for wakeboarding team website. Dark mode applies if OS/Browser settings dark-mode applied, if user selects dark mode on site, otherwise default dark mode is driven by Sunrise / Sunset by querying weather API daily",
    thumbnail: projectShredThumbnail,
    img: projectShredThumbnail,
    siteLink: "https://shredsquad.herokuapp.com/",
    githubLink: "https://github.com/prb01/shredsquad",
    demoLink: "https://vimeo.com/707819729",
  },
  {
    name: "Toños Cafe",
    devTools: ["shopify", "liquid", "css"],
    description:
      "Rewards program implementation on Shopify. Yotpo plugin installation on Shopify with customised css & liquid templates.",
    thumbnail: projectTonosThumbnail,
    img: projectTonosThumbnail,
    siteLink: "https://www.tonoscafebakery.com/pages/tonos-rewards",
    githubLink: null,
    demoLink: "https://vimeo.com/721777405",
  },
  {
    name: "Coming Soon",
    devTools: [],
    description: "",
    thumbnail: "",
    img: "",
    siteLink: null,
    githubLink: null,
    demoLink: null,
  },
]
