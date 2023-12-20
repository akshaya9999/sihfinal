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
          <div className='text-indigo-900 pt-2'>
          Cautionary notice:
Please be aware that the model may take a few minutes to respond if it has been inactive for an extended period.
          </div>
        
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



// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import axios from "axios";
// import Replicate from "replicate";
// import { Button } from "@material-tailwind/react";

// export default function SimpleContainer({ transcript }) {
//   const [data, setData] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState("");

//   const output = async () => {
//     try {
//       console.log("clicked");
//       const pr = `\
//         Customer Query: "${transcript}" \
//         Customer Emotion: "{{'angry':0.81,neutral:3.6}"\

//         Agent Assistance:
//         Generate sweet-talking lines to make the customer feel heard and valued.
//         Provide insights or information relevant to the customer's laptop query.
//         Offer bullet points to guide the agent in addressing the customer's concern.
//         Consider the customer's emotion and tailor the response accordingly.
//       `;

//       const result = await axios.get("http://127.0.0.1:8000/replme/", {
//         params: { 'prompt': { pr } },
//         headers: { 'Content-Type': 'application/json' }
//       });

//       setData(result.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <div className='text-center pt-5'>
//           <Button className="bg-indigo-900 text-lg" onClick={output}>
//             Upload Text
//           </Button>
//           <div className='text-indigo-900 pt-2'>
//             Cautionary notice:
//             Please be aware that the model may take a few minutes to respond if it has been inactive for an extended period.
//           </div>

//           <div className='p-2'></div>
//           {error && <p>Error: {error}</p>}

//           <Box sx={{ bgcolor: '#303F9F', height: '100vh', color: 'white', padding: '30px' }}>
//             {data && <p>Data: {JSON.stringify(data)}</p>}
//           </Box>

//         </div>
//       </Container>
//     </React.Fragment>
//   );
// }
