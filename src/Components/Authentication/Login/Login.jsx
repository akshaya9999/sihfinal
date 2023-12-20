import React, { useState } from 'react';
import { app } from '../../../Firebase/config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import bgimage from "../../../assets/bg3.avif";

const auth = getAuth(app);

function Login() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Abc = async () => {    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("logged in");
            console.log({ auth });
            console.log(userCredential);
            const user = userCredential.user;
            const uuid = userCredential;
            navigate('/home');
        } catch (error) {
            console.log("error");
        } 
    };

    return (
      <div className=" h-screen w-screen" style={backgroundStyle}>
        <section className="h-screen flex items-center justify-center">
            
            <div className="w-full max-w-md" >
                <h1 className="text-5xl font-bold mb-6 text-indigo-900">Login</h1>
                
                <div className="mb-6">
                    <h2>Email</h2>
                    <input
                        type="text"
                        value={email}
                        className="w-full border border-gray-300 p-2 rounded"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <h2>Password</h2>
                    <input
                        type="password"
                        value={password}
                        className="w-full border border-gray-300 p-2 rounded"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-6 flex items-center">
                    <input
                        className="mr-2"
                        type="checkbox"
                        value=""
                        id="exampleCheck2"
                    />
                    <label
                        htmlFor="exampleCheck2"
                        className="cursor-pointer"
                    >
                        Remember me
                    </label>
                    
                </div>

                <button
                    type="button"
                    className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => {
                        Abc();
                        console.log(email, password);
                    }}
                >
                    Login
                </button>
                

                
            </div>
            <div><img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
        </section>
        </div>
    );
}

export default Login;
