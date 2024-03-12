import pkgs from "./packages"
import { createConfig } from "quados"

export default createConfig({
    pkgs: [
        pkgs.warehouse.withCommit(
            "510449e16535f2b28ef0ae9a53b0df119494e32d36a5572e0db1c44e96d9b08f"
        ),
        pkgs.vscodium.withConfig({
            "file.json": {
                some: "value",
            }.toString(),
            "otherFile.ini": "foo",
        }),
    ],
})
