
import { useNavigate } from 'react-router-dom';

function BrokerDetails() {

    const navigate = useNavigate();

    return(
        <><button onClick={() => navigate('/')}>
        test2
      </button>
        </>
    );
}
export default BrokerDetails;