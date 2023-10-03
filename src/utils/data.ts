import { Arm, CGE, Chromagar, DevTools, Europe, Funnel, Hif, LifeScience, MicroBiology, Oxfam, Royal, STICLab, Ukri, UoC, iTeam } from "@/assets";
import { INavbarLink, IPartner, ISolution } from "@/types";

export const navbarLinks: INavbarLink[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Technology",
        path: "/technology",
    },
    {
        name: "Our Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]

export const solutions: ISolution[] = [
    {
        image: Funnel,
        description: "WaterScope® is refining the membrane filtration method. Our motorised pump uses vacuum filtration to draw water through a metal cartridge, collecting a sample on a padded membrane where the bacteria will grow"
    },
    {
        image: MicroBiology,
        description: "The sample is incubated inside the testing kit for up to 18+ hours. A tiny, built-in microscope and our machine learning algorithm automatically identify and count E. coli and other coliforms in the water supply."
    },
    {
        image: DevTools,
        description: "An embedded IoT module in each testing system uploads the sample data to our WaterScope® app and dashboard, allowing for digital dissemination and analysis of water quality anywhere in the world."
    },
]

export const partners: IPartner[] = [
    {
        image: Hif,
        name: "Humanitarian Innovation Fund"
    },
    {
        image: UoC,
        name: "University of Cambridge"
    },
    {
        image: iTeam,
        name: "I Teams"
    },
    {
        image: Oxfam,
        name: "Oxfam"
    },
    {
        image: Ukri,
        name: "Ukri"
    },
    {
        name: "ARM",
        image: Arm
    },
    {
        name: "Royal ACademy of Engineering",
        image: Royal
    },
    {
        image: CGE,
        name: "Center for Global Equality"
    },
    {
        image: Europe,
        name: "Europe flag"
    },
    {
        image: STICLab,
        name: "STIC Lab"
    },
    {
        image: Chromagar,
        name: "Chromagar"
    },
    {
        image: LifeScience,
        name: "Life Science Factory"
    }
]
