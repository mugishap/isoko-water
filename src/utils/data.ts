import { DevTools, Funnel, MicroBiology } from "@/assets";
import { INavbarLink, ISolution } from "@/types";

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