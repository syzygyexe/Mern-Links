import React, { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const message = useMessage();
  // loading, error, request is taking from "../hooks/http.hooks"
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    // event.target.name is inside of our <input name="email" or name="password" />
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      // using our back-end functionality from "../../routes/auth.routes.js"
      //   ...form stands for received email and password
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>Shrink a link!</h1>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Authorization</span>
            <div>
              <div className='input-field'>
                <input
                  placeholder='Enter your email'
                  id='email'
                  type='text'
                  name='email'
                  className='yellow-input'
                  onChange={changeHandler}
                />
                <label htmlFor='email'>Email Name</label>
              </div>

              <div className='input-field'>
                <input
                  placeholder='Enter password'
                  id='password'
                  type='password'
                  name='password'
                  className='yellow-input'
                  onChange={changeHandler}
                />
                <label htmlFor='email'>Password</label>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button
              className='btn yellow darken-4'
              style={{ marginRight: 10 }}
              // Disable button when loading === true
              disable={loading}
            >
              Login
            </button>
            <button
              className='btn grey lighten-1.black-text'
              onClick={registerHandler}
              // Disable button when loading === true
              disable={loading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
