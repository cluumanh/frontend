import { Menu } from 'react-admin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

export const MainLeftMenu = () => (
    <Menu>
        <Menu.Item to="/" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
        <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
    </Menu>
);
