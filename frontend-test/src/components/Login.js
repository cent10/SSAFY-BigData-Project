import React, { useState } from "react"
import { Redirect } from "react-router-dom"

function Login({ authenticated, login, location }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        try {
            login({ email, password })
        } catch (e) {
            alert("Failed to login")
            setEmail("")
            setPassword("")
        }
    }

    const { from } = location.state || { from: { pathname: "/main" } }
    if (authenticated) return <Redirect to={from} />

    return (
        <div className="home">
            {/* <!-- Masthead--> */}
            <header className="masthead" id="page-top">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">
                            Persnal
                        <br />
                            Training
                        <br />
                            Service
                </h1>
                <h2 className="text-white-50 mx-auto mt-2 mb-5">Login</h2>
                    <input
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                        type="text"
                        placeholder="email"
                    />
                    <input
                        value={password}
                        onChange={({ target: { value } }) => setPassword(value)}
                        type="password"
                        placeholder="password"
                    />
                    <button onClick={handleClick}>Login</button>
                </div>
            </div>
            </header>
        </div>
    )
}

export default Login