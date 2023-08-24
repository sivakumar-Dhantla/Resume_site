import { useState} from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';




function Login() {
    const [activeForm, setActiveForm] = useState('login'); // Track active form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const Navigate = useNavigate()


    /*useEffect(() => {
        function start() {
          gapi.client.init({
            clientId:"858995134030-0a7g4divtvkf86jliqfgu9bb1k754i8k.apps.googleusercontent.com",
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);*/


    const handleGoogleLoginSuccess = (res) => {
        const tokenId = res.tokenId;

        axios
            .post('http://localhost:3001/google-login', { tokenId })
            .then((result) => {
                if (result.data.token) {
                    // Store the token on the frontend (you can use Redux, context, or local storage)
                    // Redirect the user to the protected area of your application
                    Navigate('/Resumes');
                }
            })
            .catch((err) => console.log(err));
    };

    const handleGoogleLoginFailure = (error) => {
        if (error.error === "popup_closed_by_user") {
            console.log('Google login was closed by the user.');
        } else {
            console.error('Google login failure:', error);
            if (error.details) {
                console.error('Details:', error.details);
            }
        }
    };
    


    const toggleForm = (formType) => {
        setActiveForm(formType);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    Navigate('/Resumes')
                }

            })
            .catch(err => console.log(err))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(results => {
                console.log(results)
                Navigate('//Resumes')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="hero">
            <div className="form-box">
                <div className="buttonBox">
                    <div id="btn"></div>
                    <button
                        type="button"
                        className={`toogleBtn ${activeForm === 'login' ? 'active' : ''}`}
                        onClick={() => toggleForm('login')}
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className={`toogleBtn ${activeForm === 'register' ? 'active' : ''}`}
                        onClick={() => toggleForm('register')}
                    >
                        Register
                    </button>
                </div>


                {activeForm === 'login' && (


                    //loginForm

                    <form id='login' onSubmit={handleLogin} className='inputGrp'>
                        <input
                            type='email'
                            className='inputField'
                            placeholder='Email'
                            name='email'
                            value={email}
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            className='inputField'
                            placeholder='Password'
                            name='password'
                            value={password}
                            autoComplete='off'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className='loginButton'

                        >
                            Login
                        </button>
                        <label className='text' type="text">Or Sign In with</label>
                        
                        
                            <GoogleLogin
                                clientId="858995134030-0a7g4divtvkf86jliqfgu9bb1k754i8k.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                 onSuccess={handleGoogleLoginSuccess}
                                onFailure={handleGoogleLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                className="loginButton_google"
                            />
                        
                        
                    </form>
                )}


                {activeForm === 'register' && (
                    //registerForm
                    <form onSubmit={handleRegister} id="register" className='registerfrom'>
                        <input
                            type='text'
                            className='registerinput'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type='text'
                            className='registerinput'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            className='registerinput'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type='checkbox'
                            className='checkbox'
                        />
                        <span>I consent to the Terms & Privacy policy</span>
                        <button
                            type="submit"
                            className='loginButton'

                        >
                            Register Now
                        </button>
                        <label className='text' type="text">Or Sign In with</label>
                        
                            <GoogleLogin
                               clientId="858995134030-0a7g4divtvkf86jliqfgu9bb1k754i8k.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={handleGoogleLoginSuccess}
                                onFailure={handleGoogleLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                className="google"
                            />
                        
                        
                    </form>
                )}
            </div>
        </div>
    );
}

export default Login;
