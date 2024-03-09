import { createConfig } from "quados"
import packages from "./packages"

createConfig({
    pkgs: [
        packages.warehouse.withCommit(
            "510449e16535f2b28ef0ae9a53b0df119494e32d36a5572e0db1c44e96d9b08f"
        ),
    ],
})
