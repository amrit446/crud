import React,{useState} from 'react';
import { useHistory } from 'react-router-dom'


function Signup() {
    const history = useHistory()

    const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");


    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
         console.log(data)
		if (data.status === 'ok') {
			history.push('/signin')
		}
	}

  return (
    <div>
        <form class="form-group col-6 m-4">
  <div class="form-group">
  <label for="exampleInputEmail1">Email </label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    value={email} onChange={e=>setEmail(e.target.value)}
    aria-describedby="emailHelp" placeholder="Enter email"/>
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"
     value={name} onChange={e=>setName(e.target.value)}
    aria-describedby="emailHelp" placeholder="Enter Name"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
     value={password} onChange={e=>setPassword(e.target.value)}
    placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    
  </div>
  <button type="submit" class="btn btn-primary" onClick={registerUser}>Register</button>
</form>
    </div>
  )
}

export default Signup