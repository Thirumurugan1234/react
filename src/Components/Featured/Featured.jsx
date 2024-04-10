
import { CircularProgressbar } from "react-circular-progressbar";
import "./Featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />

        
            </div>
            <p className="title">Total sale made today</p>
            <p className="amount">$420</p>
            <p className="desc">previous transaction processing,last payments may not be include.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                        <div className="itemResult negative" >
                        <KeyboardArrowDownIcon fontSize="small" />

                            <div className="resultAmount">$32.4k
                        </div>
                    </div>
                    
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive" >
                        <KeyboardArrowUpIcon fontSize="small" />

                            <div className="resultAmount">$13.4k
                        </div>
                    </div>
                    
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive" >
                        <KeyboardArrowUpIcon fontSize="small" />

                            <div className="resultAmount">$35.4k
                        </div>
                    </div>
                    
                </div>
            </div>
    
        </div>
    </div>
  )
}
