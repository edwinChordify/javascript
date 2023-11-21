import React from 'react'
import { useState } from 'react'
import instance from './baseURL'
import { useNavigate } from 'react-router-dom'
function Register() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [data, setdata] = useState("")
    const [mobile, setmobile] = useState("")



    const navigate = useNavigate()

    const submitThis = async (e) => {
        e.preventDefault()
        const info = { name: name, email: email, password: password, mobile: mobile }
        setdata(info)
        try {
            const registerresponse = await instance.post('/user/signup', info);
            alert(registerresponse.data.message);
            navigate('/Login')


        } catch (error) {
            console.log(error)
        }

    }
    console.log(data);

    return (
        <div>
            <form action="" onSubmit={submitThis} >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name='email' id='email' value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name='password' id='password' value={password} onChange={(e) => setpassword(e.target.value)} />

                </div>
                <div>
                    <label htmlFor="mobile">Mobile no</label>
                    <input type="text" name='mobile' id='mobile' value={mobile} onChange={(e) => setmobile(e.target.value)} />

                </div>

                <button type='submit'>Register</button>


            </form>


        </div>
    )
}

export default Register