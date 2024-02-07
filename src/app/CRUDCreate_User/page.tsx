"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Users {
    id: number;
    Username: string;
    password: string;
};


const LoginRegister: React.FC = () => {
    const ApiLogin = 'http://127.0.0.1:8000/Urls/UserView/';
    const [userData, setUserData] = useState<Users[]>([]);
    const [createInput, setCreateInput] = useState<{ 
        Username: string; 
        password: string}>
        ({
        Username: '',
        password: '',
    });
    const fetchData = async () => {
        try {
          const response = await axios.get<Users[]>(ApiLogin);
          setUserData(response.data);
          alert("Acessando áre de cadastramento!");
        } catch (error) {
          console.error('Error fetching data:', error);
          alert("Erro ao coletar os dados ...");
        }
    };

    const createData = async () => {
        try {
          await axios.post(ApiLogin, createInput);
          fetchData();
          setCreateInput({ Username: '', password: '' });
          alert("Dados inseridos com sucesso!!");
        } catch (error) {
          alert("Erro ao coletar os dados ...");
          console.error('Error creating data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div style={{backgroundColor: 'aliceblue', height: '650px', paddingTop: '100px'}}>
            <center>
        <form 
            onSubmit={(e) => {
            e.preventDefault();
            createData();
            }}
            >
        <div>
        <label style={{color: 'blue', fontSize: '25px', fontFamily: 'serif'}} htmlFor="username">Username:</label><br/>
        <input
          type="text"
          id="userInput"
          value={createInput.Username}
          onChange={(e) => setCreateInput({ ...createInput, Username: e.target.value })}
          required
          style={{color: 'black', paddingLeft: '15px', fontFamily: 'fantasy'}}
        />
        </div><br/><br/>
        <div>
        <label style={{color: 'blue', fontSize: '25px', fontFamily: 'serif'}} htmlFor="password">Password:</label><br/>
        <input
          type="password"
          id="passwordInput"
          value={createInput.password}
          onChange={(e) => setCreateInput({ ...createInput, password: e.target.value })}
          required
          style={{color: 'black', paddingLeft: '15px', fontFamily: 'fantasy'}}
        />
        </div>
        <br/>
        <button style={{backgroundColor: 'green', color: 'cyan', fontFamily: 'serif', width: '150px'}} onClick={createData}>Create User</button>
        </form>
        </center>
        </div>
    )
    
}

export default LoginRegister;