import { Link } from 'react-router-dom';
import './Home.css';
import { Button, Row, Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';

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
        <Stack gap={4} >
            <Stack direction="horizontal" gap={2} className="justify-content-between">
                <h1>Users</h1>
                <Link to="/register">
                    <Button variant="primary">ADD USER</Button>
                </Link>
            </Stack>
            <div className="App">
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Balance(₦)</th>
                        </tr>
                        {users.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.username}</td>
                                    <td>{val.balance}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Stack>
    );
}