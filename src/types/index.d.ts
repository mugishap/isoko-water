import { StaticImageData } from "next/image"

export type INavbarLink = {
    name: string
    path: string
}

export type ISolution = {
    image: StaticImageData,
    description: string
}

export type IPartner = {
    image: StaticImageData,
    name: string
}
