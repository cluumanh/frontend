
import './App.css'
import authProvider from "./providers/authProvider.ts";
import {Admin, CustomRoutes, Resource} from "react-admin";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import LoginPage from "./pages/login/loginPage.tsx";
import {dataProvider} from "./providers/dataProvider/dataProvider.ts";
import MainLayout from "./layout/MainLayout.tsx";
import RegisterPage from "./pages/login/registerPage.tsx";
import { Route } from "react-router-dom";
import {Resources} from "./constants/resources.ts";

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        loginPage={LoginPage}
        layout={MainLayout}
        requireAuth
    >
        <CustomRoutes noLayout>
            <Route path="/register" element={<RegisterPage />} />
        </CustomRoutes>

        <Resource name={Resources.USERS}></Resource>
    </Admin>
);

export default App
