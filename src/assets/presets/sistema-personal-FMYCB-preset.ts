import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";

const SistemaPersonalFMYCBPreset = definePreset(Aura, {
    components: {
        floatlabel: {
            focus: {
                color: "black",
            },
        },
        toast: {
            colorScheme: {
                light: {
                    root: {
                        error: {
                            background: "black",
                            borderColor: "black",
                            color: "black",
                        }
                    }
                },
            }
        }
    }
});

export default SistemaPersonalFMYCBPreset;
