import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



function  LoadingBackdrop({ open }: { open: boolean }) {

  return (
    <Backdrop style={{display:"flex",flexDirection:"column",gap:"5%"}}
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={open}
    >
        
      <CircularProgress color="inherit" />
      <div>Please wait a while...</div>
    </Backdrop>
  );
};

export default LoadingBackdrop;
