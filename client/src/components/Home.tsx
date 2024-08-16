import { Link } from 'react-router-dom';
import './Home.css';
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { NavBar } from './NavBar';

type User = {
    user_id: string
    username: string
    balance: number
    password: string
    id: number
 }


export function Home() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

        fetch('http://localhost:5138', {
            method: 'GET',
          }).then(res => {
            return res.json();
          }).then(data => {
            console.log(data);
            setUsers(data);
           }
        ) 
    }, []);

    return (
        <Stack gap={4} direction='horizontal'>
            <NavBar />

            <div>
          
            </div>
        </Stack>
    );
}