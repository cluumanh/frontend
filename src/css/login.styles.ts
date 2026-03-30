import type {SxProps, Theme} from "@mui/material";

export const loginSx: SxProps<Theme> = () => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "none",
    "& .RaLogin-card": {
        margin: 0,
        backdropFilter: "blur(15px)",
        background: "rgba(255,255,255,0.15)",
        WebkitBackdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        borderRadius: "15px",
    },
    "& .MuiInputLabel-root": {
        color: "#3e3838",
    },
    "& .MuiInputLabel-root.Mui-focused:not(.Mui-error)": {
        color: "#000",
    },
    "& .MuiCardContent-root": {
        color: "#3e3838",
    },
    "& .MuiInputBase-input": {
        color: "#3e3838",
    },
    "& .MuiInputBase-input:hover": {
        color: "#3e3838",
    },
    "& .MuiInputLabel-root .Mui-focused": {
        color: "#000",
    },
});