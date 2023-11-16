import { FormEvent, useContext, useState } from 'react';
import { Box, Stack, TextField, Button, Select, MenuItem } from '@mui/material';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { CurrencyCodes } from '../contexts/CurrencyReducer';

const CurrencySelector = () => {
  const [ mxn, setMXN ] = useState<number|string>('');
  const [ currency, setCurrency ] = useState<string>('cad');

  const { dispatch } = useContext(CurrencyContext);

  const onConvert = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currency === 'cad') {
      dispatch({ type: CurrencyCodes.CAD, payload: Number(mxn) });
    }
    if (currency === 'usd') {
      dispatch({ type: CurrencyCodes.USD, payload: Number(mxn) });
    }
  };

  return (
    <Box mb={3}>
      <form onSubmit={onConvert}>
        <Stack spacing={2} width={300}>
          <Stack direction="row" gap={2}>
            <TextField
              label="MXN"
              name="mxn"
              variant="outlined"
              placeholder="0"
              autoComplete="off"
              sx={{ width: "50%" }}
              value={mxn}
              onChange={(event) => setMXN(Number(event.target.value))}
              onFocus={() => setMXN('')}
            />
            <Select
              sx={{ width: "50%" }}
              onChange={(event) => setCurrency(event.target.value)}
              value={currency}
            >
              <MenuItem value="cad">CAD</MenuItem>
              <MenuItem value="usd">USD</MenuItem>
            </Select>
          </Stack>

          <Button
            variant="outlined"
            color="success"
            type="submit"
          >Convert</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CurrencySelector;