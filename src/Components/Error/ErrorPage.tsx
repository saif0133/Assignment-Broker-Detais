import Button from '@mui/material/Button';
import ErrorImage from '../../assets/exos error.png';
import './ErrorPage.css';

interface Props {
  onRefresh: () => void;
  message?: string;
  type: string;
}

function ErrorPage({ onRefresh, message, type }: Props) {

return (
<div className='error'>
<img src={ErrorImage} className='errorImg' alt="Error" />
  <h1>OOOPS!!</h1>
  {message ? <p>{message}</p> :<p>Something went wrong.</p>}
  <Button onClick={onRefresh} variant="contained"  size="large"
    >
          {type?type:"Retry"}
        </Button>
        </div>
);
};

export default ErrorPage;
