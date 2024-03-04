import Config from "@quados/tools/models/config.ts"
import packages from "@quados/tools/flatpak-manager/packages.ts"

export default Config.create({
    installedPackages: [
        packages.monophony,
        packages.warehouse,
        packages.heroicGamesLauncher,
    ],
})
