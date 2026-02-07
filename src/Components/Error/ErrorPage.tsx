import Button from '@mui/material/Button';
import ErrorImage from '../../assets/exos error.png';
import './ErrorPage.css';

interface Props {
  onRefresh: () => void;
}

function ErrorPage({ onRefresh }: Props) {

return (
<div className='error'>
<img src={ErrorImage} className='errorImg' alt="Error" />
  <h1>OOOPS!!</h1>
  <p>Something went wrong.</p>
  <Button onClick={onRefresh} variant="contained"  size="large"
    >
          Please try again
        </Button>
        </div>
);
};

export default ErrorPage;
