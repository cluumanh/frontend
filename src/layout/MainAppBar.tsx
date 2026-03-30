import {AppBar, UserMenu} from "react-admin";
import {Typography} from "@mui/material";

const MainAppBar = () => (
    <AppBar userMenu={<UserMenu />}>
        <Typography
            variant="h6"
            sx={{ flex: 1 }}
        >
            Admin System
        </Typography>
    </AppBar>
);

export default MainAppBar;