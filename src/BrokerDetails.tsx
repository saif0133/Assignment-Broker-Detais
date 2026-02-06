
import { useNavigate } from 'react-router-dom';
import './BrokerDetails.css';
import Divider from '@mui/material/Divider';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';

function BrokerDetails() {

    const navigate = useNavigate();


    return (
        <div className='Broker-page'>
            <div className='broker-box'>
                <div className='box-header'>
                    <h1>Broker Details</h1>
<div style={{cursor:"pointer"}} className="exit-button" onClick={() => navigate('/')}>
  <CloseIcon />
</div>
                </div>
                <div className='box-content'>
                    <div className='left'>
                        <div className='user-img'>
                            <img src="https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                        </div>
                        <div className='user-status'>
                            <div className='status-indicator'>Active</div>
                            <div className='status-icon'>
                                <CheckBoxIcon fontSize='inherit' ></CheckBoxIcon>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                    <div className='personal-info'>
                        <h1 className='user-name'>Saif Reda Alsaeed</h1>
                        <h1 className='user-company'>Almustaqilla Research (iiacss)</h1>
                    </div>

                    <Divider variant="fullWidth" flexItem style={{margin:"10px"}} />

                    <div className='contact-info'>
                        <div className="email card">
                             <MarkunreadIcon style={{color:"#3e97b5",fontSize:"xx-large"}}></MarkunreadIcon>
                             <div>
                            <div className='title'>
                               
                                Email:</div>
                            <div className='body'>saif.reda@almustaqilla.com</div>
                            </div>
                        </div>
                        <Divider variant="fullWidth" orientation="vertical"  style={{margin:"10px"}} />

                        <div className="phone-number card">
                             <CallIcon style={{color:"#3e97b5",fontSize:"xx-large"}}></CallIcon>
                             <div>
                            <div className="title">
                               
                                Mobile:</div>
                            <div className='body'>+962 7 9555 5555</div>
                            </div>
                        </div>
                        
                    </div>
</div>

                </div>
                <div className='box-footer'></div>
            </div>

            <div className='simulate-error' style={{display:"flow",position:"absolute",right:"0",bottom:"0",padding:"10px",backgroundColor:"#3e97b5",color:"white",cursor:"pointer",borderRadius:"5px 0 0 0"}} >
                Simulate Error
            </div>
        </div>
    );
}
export default BrokerDetails;