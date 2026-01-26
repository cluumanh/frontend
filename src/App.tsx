
import './App.css'
import authProvider from "./providers/authProvider.ts";
import {Admin, Resource} from "react-admin";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import LoginPage from "./pages/login/loginPage.tsx";
import Layout from "./layout/layout.tsx"
import {dataProvider} from "./providers/dataProvider/dataProvider.ts";

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        loginPage={LoginPage}
        layout={Layout}
        requireAuth
    >
        <Resource name="users" />
    </Admin>
);

export default App
