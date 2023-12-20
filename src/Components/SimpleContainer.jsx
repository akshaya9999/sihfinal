import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from "axios";
import Replicate from "replicate";

export default function SimpleContainer() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const output = async () => {
    try {
      console.log("clicked");
      const result = await axios.get("http://127.0.0.1:8000/replme/", {
  params: { 'prompt': "what is 2+2" },
  headers: { 'Content-Type': 'application/json' }
});

      setData(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <button onClick={output}>Click</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        
        <Box sx={{ bgcolor: '#303F9F', height: '100vh', color: 'white' }} >
        {data && <p>Data: {JSON.stringify(data)}</p>}
          </Box>
      </Container>
    </React.Fragment>
  );
}


