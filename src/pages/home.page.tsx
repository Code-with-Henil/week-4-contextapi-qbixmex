import { Box, Typography } from "@mui/material";
import DisplayCurrency from "../components/DisplayCurrency";
import CurrencySelector from "../components/CurrencySelector";
import { CurrencyProvider } from "../contexts/CurrencyContext";

const HomePage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography
        component="h1"
        fontWeight="500"
        fontSize="5rem"
        color="primary"
        mb={3}
      >
        Currency Exchange
      </Typography>

      <CurrencyProvider>
        <CurrencySelector />
        <DisplayCurrency />
      </CurrencyProvider>
    </Box>
  );
};

export default HomePage;