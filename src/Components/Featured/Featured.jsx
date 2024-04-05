
import { CircularProgress } from "@mui/material";
import "./Featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgress value={70} text={"70%"}/>

        
            </div>
        </div>
    </div>
  )
}
