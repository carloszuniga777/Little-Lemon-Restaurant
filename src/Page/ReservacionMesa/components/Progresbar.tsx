
import { useRegisterFormContext } from "../hook/useRegisterFormContext"
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Typography } from "@mui/material";



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 16,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#0d6efd',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));
  


  

export const Progresbar = () => {

    const{state} = useRegisterFormContext()

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <BorderLinearProgress variant="determinate" value={state.percent} />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold' 
        }}
      >
        {`${state.percent}%`}
      </Typography>
    </Box>

  )
}

