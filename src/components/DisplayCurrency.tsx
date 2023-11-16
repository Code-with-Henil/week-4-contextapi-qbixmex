import { useContext } from "react";
import { Typography } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { CurrencyContext } from "../contexts/CurrencyContext";

const DisplayCurrency = () => {
  const { exchange } = useContext(CurrencyContext);

  const displayCurrency = (value: number) => {
    return value.toLocaleString('en-us', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Typography
        component="p"
        fontSize="3rem"
        mb={3}
        color={grey[500]}
      >
        ${' '}
        <span style={{ color: blue[500] }}>
          { displayCurrency(exchange.result) }
        </span>{' '}
        dollars
      </Typography>
    </>
  );
};

export default DisplayCurrency;