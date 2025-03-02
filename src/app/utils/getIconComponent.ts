import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi"
import * as AiIcons from "react-icons/ai"

import { IconType } from "react-icons";

const iconLibraries: Record<string, Record<string, IconType>> = {
    fa: FaIcons,
    tb: TbIcons,
    ri: RiIcons,
    si: SiIcons,
    bi: BiIcons,
    ai: AiIcons
};

export const getIconComponent = (library: string, name: string): IconType | null => {
    const lib = iconLibraries[library.toLowerCase()];
    return lib?.[name] || null;
};
