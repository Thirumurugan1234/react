import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="search..." /> 
                <SearchIcon />

            </div>
            <div className="items"></div>
                <div className="item">
                <LanguageIcon className="icon"/>
                English
            </div>
            <div className="item">
                <DarkModeIcon className="icon"/>
                </div>
                <div className="item">
                <FullscreenExitIcon className="icon"/>
                </div>
                <div className="item">
                <div className="counter"> 11</div>
                <NotificationsNoneIcon className="icon"/>
           
                </div>
                   
                 <div className="item">
                 <div className="counter"> 23</div>
                <ChatBubbleOutlineIcon className="icon"  /> 
               
                
                </div>
                <div className="item">
                <FormatListBulletedIcon className="icon"/>
                </div>
                <div className="item">
                <img 
                src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg" alt=""
                className="avatar"
                />
                
                </div>
            
           
           

       
        </div>
    </div>
  )
}

