import Config from "@quados/tools/models/config"
import packages from "./packages"

export default Config.create({
    installedPackages: [packages.monophony],
})
