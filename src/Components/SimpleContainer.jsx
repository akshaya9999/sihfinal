import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from "axios";
import Replicate from "replicate";
import { Button } from "@material-tailwind/react";

export default function SimpleContainer({transcript}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const output = async () => {
    try {
      console.log("clicked");
      const result = await axios.get("http://127.0.0.1:8000/replme/", {
  params: { 'prompt': transcript },
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
        <div className='text-center pt-5'>
        <Button className="bg-indigo-900 text-lg" onClick={output}>
              Upload Text
            </Button>
        
        <div className='p-2'></div>
        {/* {loading && <p>Loading...</p>} */}
        {error && <p>Error: {error}</p>}
        
        <Box sx={{ bgcolor: '#303F9F', height: '100vh', color: 'white', padding: '30px' }}>
  {data && <p>Data: {JSON.stringify(data)}</p>}
</Box>

          </div>
      </Container>
    </React.Fragment>
  );
}


