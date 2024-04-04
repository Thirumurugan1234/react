import "./Sidebar2.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidebar2 = () => {
  return (
    <div className="Sidebar2">
        <div className="top">
            <span className="logo">JEWELLERY </span>
            </div>

            <hr/>
        <div className="center">
            <ul >
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon"/><span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                
                <li><PersonIcon className="icon"/><span>Users</span>
                </li>
                <li><LocalGroceryStoreIcon  className="icon"/><span>Product</span>
                </li>
                <li><CreditCardIcon  className="icon"/><span>Orders</span>
                </li>
                <li><LocalShippingIcon className="icon" /><span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li><InsertChartIcon className="icon"/><span>Status</span>
                </li>
                <li><NotificationsNoneIcon className="icon"/><span>Notification</span>
                </li>
                <p className="title">SERVICES</p>
                <li> <PsychologyIcon className="icon" /><span>Logs</span>
                </li>
                <li><SettingsIcon className="icon"/><span>Setting</span>
                </li>
                <p className="title">USER</p>
                <li><AccountCircleIcon className="icon" /><span>Profile</span>
                </li>
                <li> <LogoutIcon className="icon"/><span>Log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
