import "./Widgets.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export const Widgets = ({type}) => {
    let data;
    const amount=100;
    const diff =20;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"see all users",
                icon:<PersonIcon className="icon" style={{color:"crimson",
                backgroundColor:"rgba(255,0,0,0.2)",
            }}/>,
            };
            break;

            

            

            case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"view all orders",
                icon:<ShoppingCartIcon className="icon" style={{
                    backgroundColor:"rgba(218,165,32,0.2)",
                    color:"goldenrod"
                }} />,
            };
            break;

            case "earning":
            data={
                title:"EARNING",
                isMoney:true,
                link:"view net earnings",
                icon:< MonetizationOnIcon className="icon" style={{
                    backgroundColor:"rgba(0,128,0,0.2)",
                    color:"green"
                }} />,
            };
            break;

            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"see details",
                icon:<AccountBalanceWalletIcon className="icon" style={{
                    backgroundColor:"rgba(128,0,128,0.2)",
                    color:"purple"
                }} />,
            };
            break;

            case "sales report":
            data={
                title:"SALES REPORT",
                isMoney:true,
                link:"see all report",
                icon:<AssessmentIcon className="icon" style={{
                    backgroundColor:"rgba(0,0,255,0.3)",
                    color:"blue"
                }} />,
            };
            break;
            case "purchase":
            data={
                title:"PURCHASE",
                isMoney:true,
                link:"see details",
                icon:<ShoppingBasketIcon className="icon" style={{
                    backgroundColor:"rgba(196,164,110)",
                    color:"brown"
                }} />,
            };
            break;
            default:
                break;
    }





  return (
    <div className="Widgets">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon />

                {diff}%
                </div>
               {data.icon}
        </div>
    </div>
  ) 
}
