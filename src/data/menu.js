import { FaYoutube } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiCodepen } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaGlobeEurope } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";

export const headerMenus = [
    {
        title: "유럽",
        icon: <FaGlobeEurope />,
        src: "/search/유럽 역사"
    },
    {
        title: "아시아",
        icon: <GiEarthAsiaOceania />,
        src: "/search/아시아 역사"
    },
    {
        title: "북아메리카",
        icon: <FaGlobeAmericas />,
        src: "/search/북아메리카 역사"
    },
    {
        title: "남아메리카",
        icon: <FaGlobeAmericas />,
        src: "/search/남아메리카 역사"
    },
    {
        title: "아프리카",
        icon: <FaGlobeAfrica />,
        src: "/search/아프리카 역사"
    },
    {
        title: "오세아니아",
        icon: <FaEarthOceania />,
        src: "/search/오세아니아 역사"
    },
    {
        title: "세계대전",
        icon: <FaPersonMilitaryRifle />,
        src: "/search/세계대전 역사"
    },
]
export const searchKeyword = [
    {
        title: "Europe",
        src: "/search/Europe"
    },
    {
        title: "North America",
        src: "/search/North America"
    },
    {
        title: "South America",
        src: "/search/South America"
    },
    {
        title: "Asia",
        src: "/search/Asia"
    },
    {
        title: "Oceania",
        src: "/search/Oceania"
    },
    {
        title: "Africa",
        src: "/search/Africa"
    },
]

export const snsLinks = [
    {
        title: "github",
        url: "https://github.com/KIMJW04",
        icon: <IoLogoGithub />,
    },
    {
        title: "youtube",
        url: "https://www.youtube.com",
        icon: <FaYoutube />,
    },
    {
        title: "codepen",
        url: "https://www.codepen.com",
        icon: <SiCodepen />,
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/ryun__04",
        icon: <FaInstagram />,
    }
]