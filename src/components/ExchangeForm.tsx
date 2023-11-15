import { FormEvent, useContext, useRef } from 'react';
import { Box, Stack, TextField, Button } from '@mui/material';
import { CurrencyContext } from '../contexts/CurrencyContext';

const ExchangeForm = () => {
  const cadRef = useRef<HTMLInputElement>(null);
  const mxnRef = useRef<HTMLInputElement>(null);

  const { exchange, setExchange, convertExchange } = useContext(CurrencyContext);

  const onConvert = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setExchange({
      ...exchange,
      from: Number(cadRef.current!.value),
      to: Number(mxnRef.current!.value),
    });
    convertExchange();
  };

  return (
    <Box mb={3}>
      <form onSubmit={onConvert}>
        <Stack spacing={2} width={250}>
          <TextField
            label="Canadian Dollar"
            name="mxn"
            variant="outlined"
            inputRef={cadRef}
            placeholder="0"
            autoComplete="off"
          />
          <TextField
            label="Mexican Peso"
            name="mxn"
            variant="outlined"
            inputRef={mxnRef}
            autoComplete="off"
            placeholder="0"
          />
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

export default ExchangeForm;