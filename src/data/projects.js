import projectAbraThumbnail from "../assets/img/project_abrapalabra_500x500.webp";
import projectShredThumbnail from "../assets/img/project_shredsquad_500x500.webp";
import projectTonosThumbnail from "../assets/img/project_tonoscaferewards_500x500.webp";
import projectSpotlistThumbnail from "../assets/img/project_spotlist_500x500.webp";
import projectHopperThumbnail from "../assets/img/project_hopper_500x500.webp";
import logoRound from "../assets/img/logo_retro.png";

export const projects = [
  {
    name: "SpotList",
    devTools: ["react-redux", "serverless (firebase)", "spotify API"],
    description:
      "Web app that allows combining & synching of public Spotify playlist with personal playlist. Synch is performed daily via scheduled Cloud functions.",
    thumbnail: projectSpotlistThumbnail,
    img: projectSpotlistThumbnail,
    siteLink: "https://spotlist.prb01.com/",
    githubLink: "https://github.com/prb01/spotlist",
    demoLink: "https://vimeo.com/738321807",
  },
  {
    name: "Hopper",
    devTools: ["react-redux", "serverless (firebase)", "stripe API"],
    description:
      "Enterprise SaaS for reservation management of a trampoline park. This team project features POS, add-on products, scheduling, and waiver management.",
    thumbnail: projectHopperThumbnail,
    img: projectHopperThumbnail,
    siteLink: "https://hopper.prb01.com/",
    githubLink: null,
    demoLink: "https://vimeo.com/741817262",
  },
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
];
