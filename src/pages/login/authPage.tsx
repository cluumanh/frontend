import {Box} from "@mui/material";
import * as React from "react";
import {authSx} from "../../css/auth.styles.ts";

const AuthPage = ({ children }: { children: React.ReactNode }) => {
    return(
        <Box sx={authSx}>
            {children}
        </Box>
    );
}
export default AuthPage;