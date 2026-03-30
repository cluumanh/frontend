import bg from "../assets/background.png";
import type {SxProps, Theme} from "@mui/material";

export const authSx: SxProps<Theme> = () => ({
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});