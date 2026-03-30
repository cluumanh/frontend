import {Layout, type LayoutProps} from "react-admin";
import MainAppBar from "./MainAppBar.tsx";
import {MainLeftMenu} from "./MainLeftMenu.tsx";

const MainLayout = (props: LayoutProps) => {
    console.log('MyLayout render' + props);
    return <Layout {...props}
                   appBar={MainAppBar} menu={MainLeftMenu}
    />;
};

export default MainLayout;
