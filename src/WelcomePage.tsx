import { useNavigate } from 'react-router-dom'
import './App.css'
import Welcome from './assets/welcome.gif'
import Button from '@mui/material/Button'

function WelcomePage() {
  const navigate = useNavigate()

  return (
    
  
<div className='welcome'>
  <img src={Welcome} alt="welcome" width="50%" />
  <h1>  Welcome Hiring Team
</h1>
<h3 style={{ width: "50%" }}>
  I'm glad to have you here.
  This demo showcases the Broker Details interface using clean code and simple UX.
  Feel free to explore the components and data presentation.
</h3>
   <Button onClick={() => navigate('/broker-details')} variant="contained"  size="large"
    >
          View Broker Details
        </Button>

   
      </div>
    
  )
}

export default WelcomePage
