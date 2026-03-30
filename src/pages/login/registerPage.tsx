import {Button, TextField, Box, Card, CardContent, Stack} from '@mui/material';
import {useForm} from "react-hook-form";
import AuthPage from "./authPage.tsx";
import {Link} from "react-router-dom";
import {registerSx} from "../../css/registor.styles.ts";
import type {RegisterRequest} from "../../models/requests/RegisterRequest.ts";
import {AuthService} from "../../services/auth.service.ts";
import {useNotify} from "react-admin";
import {Role} from "../../enums/roles.enum.ts";

type FormValues = {
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
};


const RegisterPage = () => {
    const notify = useNotify();

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors},
    } = useForm<FormValues>({
        mode: "onBlur",
    });


     const onSubmitRegisForm = async(data: FormValues)  => {
        try {
            const registerRequest: RegisterRequest = {
                username: data.username,
                password: data.password,
                roles: new Array<Role>(Role.ADMIN),
                email: data.email
            }
            const isRegisterSuccessful: boolean = await AuthService.register(registerRequest);
            if (isRegisterSuccessful) {
                notify("Register successfully registered");
            }
            notify("Register failed");
        } catch (err) {
            notify("Register failed to register with err" + err);
        }
    };

    return (
        <AuthPage>
            <Box sx={registerSx}>
                <Card className={"card-container"}>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmitRegisForm)}>
                            <TextField className={"textField-style"} label="Username*"
                                       {...register("username",
                                           {
                                               required: "Username required",
                                           })}
                                       error={!!errors.username}
                                       helperText={errors.username?.message}
                            />
                            <TextField className={"textField-style"} label="Email"
                                       {...register("email",
                                           {
                                               pattern: {
                                                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                   message: "Email is wrong type",
                                               },
                                           }
                                       )}
                                       error={!!errors.email}
                                       helperText={errors.email?.message}/>
                            <TextField className={"textField-style"} label="Password*" type="password"
                                       {...register("password",
                                           {
                                               required: "Password required",
                                               pattern: {
                                                   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                                                   message: "Password must be at least 8 characters long and include at " +
                                                       "least one uppercase letter, one lowercase letter, one number, and one special character",
                                               },
                                           })}
                                       error={!!errors.password}
                                       helperText={errors.password?.message}/>

                            <TextField className={"textField-style"} label="Confirm Password*" type="password"
                                       {...register("confirmPassword",
                                           {
                                               required: "Confirm Password required",
                                               validate: (value) => value === getValues("password") || "Password not match"
                                           }
                                       )}
                                       error={!!errors.confirmPassword}
                                       helperText={errors.confirmPassword?.message}
                            ></TextField>
                            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{pt : 2}}>
                                <Button type="submit" variant="contained">Create Account</Button>
                                <Button
                                    component={Link}
                                    to="/login"
                                    variant="text"
                                >
                                    Back to Login
                                </Button>
                            </Stack>

                        </form>
                    </CardContent>
                </Card>
            </Box>
        </AuthPage>
    );
};


export default RegisterPage;
