import type {SxProps, Theme} from "@mui/material";

export const registerSx: SxProps<Theme> = () => ({
    "& .card-container": {
        width: "600px",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        borderRadius: "15px"
    },

    "& .textField-style .MuiInputLabel-root": {
        color: "#3e3838",
    }
})