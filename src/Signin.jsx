import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState } from 'react';

function Signin() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return <div>
           <div style={{display: "flex", justifyContent: "center"}}>
            {password}
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={() => {
                        function callback2(data) {
                            localStorage.setItem("token", data.token);
                        }
                        function callback1(res) {
                            res.json().then(callback2)
                        }
                        fetch("http://localhost:3000/admin/login", {
                            method: "POST",
                            
                            headers: {
                                "Content-type": "application/json",
                                "username": email,
                                "password": password
                            }
                        })
                        .then(callback1)
                    }}

                > Signin</Button>
            </Card>
        </div>
    </div>
}

export default Signin;