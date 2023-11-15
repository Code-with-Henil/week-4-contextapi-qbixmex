import { Box, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import Navbar from "../components/Navbar";

const NotFoundPage = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Navbar />
      <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 500,
            fontSize: "5rem",
            color: 'error.main'
          }}
        >
          Page Not Found
        </Typography>
        <WarningIcon sx={{
          fontSize: "5rem",
          color: 'warning.main',
        }} />
      </Box>
    </Box>
  );
};

export default NotFoundPage;
