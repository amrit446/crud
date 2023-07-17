import React,{useState} from 'react'

function Signin() {
  
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");


    
	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

  return (
    <div>
 <form class="form-group col-6 m-4">
  <div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    value={email} onChange={e=>setEmail(e.target.value)}
    aria-describedby="emailHelp" placeholder="Enter email"/>
    
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
     value={password} onChange={e=>setPassword(e.target.value)}
    placeholder="Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={loginUser}>login</button>
</form>
    </div>
  )
}

export default Signin