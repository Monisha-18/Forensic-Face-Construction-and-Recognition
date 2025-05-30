import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundLogin from './elements/background_login.jpg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                console.log(res.data);
                navigate('/home');
            })
            .catch(err => {
                console.error('Error during login:', err);
                alert('Login failed. Please check your credentials and try again.');
            });
    }

    const containerStyle = {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Segoe UI, sans-serif'
    };

    const leftPanelStyle = {
        width: '60%',
        background: `linear-gradient(rgba(0, 35, 102, 0.9), rgba(0, 35, 102, 0.9)), url(${backgroundLogin}) center/cover no-repeat`,
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    };

    const logoStyle = {
        width: '80px',
        marginBottom: '1rem'
    };

    const interconnectStyle = {
        color: '#ffcc00',
        fontWeight: 'bold',
        fontSize: '1.75rem',
        marginTop: '0.5rem'
    };

    const bottomTextStyle = {
        position: 'absolute',
        bottom: '1rem',
        fontSize: '0.8rem',
        color: '#ccc'
    };

    const rightPanelStyle = {
        width: '40%',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    };

    const formBoxStyle = {
        width: '80%'
    };

    const inputStyle = {
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.25rem',
        fontWeight: 'bold'
    };

    const buttonStyle = {
        width: '100%',
        padding: '0.6rem',
        backgroundColor: '#0056ff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    const forgotStyle = {
        textAlign: 'right',
        marginTop: '0.5rem',
        fontSize: '0.85rem'
    };

    const headerStyle = {
        color: '#0056ff',
        fontWeight: 'bold',
        marginBottom: '1.5rem'
    };

    return (
        <div style={containerStyle}>
            {/* Left Panel */}
            <div style={leftPanelStyle}>
                <img src={backgroundLogin} alt="Forensic Science Logo" style={logoStyle} />
                <h5>Forensic Division</h5>
                <h2 style={interconnectStyle}>FORENSIC FACE ID</h2>
                <p>Real-Time Face Recognition & Construction Tool</p>
                <div style={bottomTextStyle}>
                    © 2025, Reconstruct. Recognize. Resolve. All Rights Reserved.
                </div>
            </div>

            {/* Right Panel */}
            <div style={rightPanelStyle}>
                <div style={formBoxStyle}>
                    <h5 style={headerStyle}>FORENSIC STAFF LOG IN</h5>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" style={labelStyle}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Email"
                                style={inputStyle}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" style={labelStyle}>Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                style={inputStyle}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" style={buttonStyle}>LOGIN »</button>
                        <div style={forgotStyle}>
                            <span 
                                onClick={() => alert('Please contact the system administrator to reset your password.')} 
                                style={{ textDecoration: 'none', color: '#0056ff', cursor: 'pointer' }}
                                >
                                Forgot Password?
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
