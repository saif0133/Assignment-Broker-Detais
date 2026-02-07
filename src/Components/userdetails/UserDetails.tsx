import Divider from '@mui/material/Divider';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import './UserDetails.css';


interface UserDetailsProps {
  Name: string;
  Company: string;
  Email: string;
  PhoneNumber: string;
  Status: boolean | string;
  pic: string;
}

function UserDetails({
  Name,
  Company,
  Email,
  PhoneNumber,
  Status,
  pic,
}: UserDetailsProps) {
    const navigate = useNavigate();

        

    return (<div className='Broker-page'>
            <div className='broker-box'>
                <div className='box-header'>
                    <h1>Broker Details</h1>
                    <div style={{ cursor: "pointer" }} className="exit-button" onClick={() => navigate('/')}>
                        <CloseIcon />
                    </div>
                </div>
                <div className='box-content'>
                    <div className='left'>
                        <div className='user-img'>
                            <img src={pic} alt="" />
                        </div>
                        <div className='user-status' style={Status==="Active" || Status==="true"?{backgroundColor:"green"}:{backgroundColor:"gray"}}>
                            <div className='status-indicator' >{Status}</div>
                            <div className='status-icon'>
                                {Status === "Active" ? <CheckBoxIcon fontSize='inherit' style={{ color: "white" }}></CheckBoxIcon> : <CloseIcon fontSize='inherit' style={{ color: "white" }}></CloseIcon>}
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='personal-info'>
                            <h1 className='user-name'>{Name}</h1>
                            <h1 className='user-company'>{Company}</h1>
                        </div>

                        <Divider variant="fullWidth" flexItem style={{ margin: "10px" }} />

                        <div className='contact-info'>
                            <div className="email card">
                                <MarkunreadIcon style={{ color: "#3e97b5", fontSize: "xx-large" }}></MarkunreadIcon>
                                <div>
                                    <div className='title'>

                                        Email:</div>
                                    <div className='body'> <a href={`mailto:${Email}`}>{Email}</a></div>
                                </div>
                            </div>
                            <Divider variant="fullWidth" orientation="vertical" style={{ margin: "10px" }} />

                            <div className="phone-number card">
                                <CallIcon style={{ color: "#3e97b5", fontSize: "xx-large" }}></CallIcon>
                                <div>
                                    <div className="title">

                                        Mobile:</div>
                                    <div className='body'><a href={`tel:${PhoneNumber}`}>{PhoneNumber}</a></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='box-footer'></div>
            </div>
            </div>

    );


}

export default UserDetails;