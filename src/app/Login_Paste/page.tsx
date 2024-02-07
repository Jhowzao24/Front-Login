"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://127.0.0.1:8000/Urls/UserView/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.headers) {
            setError('Senha do usuário correta!');
          } else{
            setError('Senha do usuário incorreta!');
          }
        } catch (error) {
          console.error('Erro ao verificar a senha:', error);
          setError('Ocorreu um erro ao verificar a senha.');
        }
      };

    return (
        <div style={{paddingTop: '20px'}}>
            <h2 style={{fontSize: '35px'}}>Login</h2>
            {error && <p style={{color: 'yellow', fontFamily: 'monospace'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                    style={{backgroundColor: 'cyan', color: 'blue'}}
                        type="text"
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div><br/>
                <div>
                    <label>Password:</label>
                    <input
                    style={{backgroundColor: 'cyan', color: 'blue'}}
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>
                <button style={{backgroundColor: 'blue', color: 'cyan', width: '150px', fontFamily: 'serif'}} type="submit">Login</button>
                <br/><br/>
                <div style={{color: 'Background'}}>
                    <h3>If you didn't make the registration, click on this button bellow!</h3>
                    <button style={{backgroundColor: 'white', color: 'blue', fontFamily: 'serif'}} onClick={() => navigate.push('/CRUDCreate_User')}>Register yourself!</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
