import {Link, Login, LoginForm} from 'react-admin';
import {Box, Button} from "@mui/material";

import {loginSx} from "../../css/login.styles.ts";
import AuthPage from "./authPage.tsx";


const LoginPage = () => (
    <AuthPage>
        <Login sx={loginSx}>
            <LoginForm className={"loginForm-style"}/>
            <Box mb={2} textAlign="center">
                <Button
                    component={Link}
                    to="/register"
                    variant="text"
                    size="large"
                    sx={{textTransform: "none"}}
                >
                    Don't have an account? Create one
                </Button>
            </Box>
        </Login>
    </AuthPage>
);

export default LoginPage;
