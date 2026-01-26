import { Layout as RaLayout, type LayoutProps} from 'react-admin';
import type {JSX} from "react/jsx-runtime";

const Layout = (props: JSX.IntrinsicAttributes & LayoutProps) => <RaLayout {...props} />;

export default Layout;
