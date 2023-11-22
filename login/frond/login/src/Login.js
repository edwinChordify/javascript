import React from 'react'
import { useState } from 'react'
import instance from './baseURL'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [data, setdata] = useState("")



    const loginThis = async (e) => {
        e.preventDefault()
        const info = { email: email, password: password }
        setdata(info)
        try {
            const registerresponse = await instance.post('/user/login', info);
            alert(registerresponse.data.message);


        } catch (error) {
            alert("enter username or password is incorrect")
            console.log('error')
        }

    }



    return (
        <div>
            <form action="" onSubmit={loginThis} >
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name='email' id='email' value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name='password' id='password' value={password} onChange={(e) => setpassword(e.target.value)} />

                </div>
                <button type='submit'>Login</button>


            </form>


        </div>
    )
}


export default Login