import React from "react";

export const AuthPage = () => {
    const { loading, error, request } = useHttp()
    const [form, setForm] = useState({
        email: "", password: ""
    })

    const changeHandler = event => {
        // event.target.name is inside of our <input name="email" or name="password" />
        setForm({ ...form, [event.target.name]: event.target.value })
    }



    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Shrink a link!</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Enter your email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email Name</label>
                            </div>

                            <div className="input-field">
                                <input placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
                            Login
                        </button>
                        <button className="btn grey lighten-1.black-text">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
