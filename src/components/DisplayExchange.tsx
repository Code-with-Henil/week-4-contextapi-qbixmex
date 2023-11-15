import { useContext } from "react";
import { Typography } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { CurrencyContext } from "../contexts/CurrencyContext";

const DisplayExchange = () => {
  const { exchange } = useContext(CurrencyContext);
  return (
    <Typography
      component="p"
      fontSize="3rem"
      mb={3}
      color={grey[500]}
    >
      ${' '}
      <span style={{ color: blue[500] }}>
        { exchange.result }
      </span>{' '}
      dollars
    </Typography>
  );
};

export default DisplayExchange;