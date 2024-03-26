import {
    FaAndroid,
    FaApple,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaWindows,
  } from "react-icons/fa";
  import { MdPhoneIphone } from "react-icons/md";
  import { SiNintendo } from "react-icons/si";
  import {BsGlobe} from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({platforms}: Props) => {
    const iconMap:{[key: string]: IconType} = {

        "android": FaAndroid ,
        "apple": FaApple ,
        "mac": FaApple ,
        "playstation": FaPlaystation ,
        "xbox": FaXbox ,
        "linux": FaLinux ,
        "windows": FaWindows ,
        "pc": FaWindows ,
        "iphone": MdPhoneIphone ,
        "nintendo": SiNintendo ,
        "globe": BsGlobe ,
    }

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray"}/>))}
    </HStack>
  )
}

export default PlatformIconsList