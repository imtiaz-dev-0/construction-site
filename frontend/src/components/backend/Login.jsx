import React, { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';

const Login = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/authenticate',{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
      }); 
      const result = await response.json();
      if(result.status == false){
        toast.error(result.errors);
      }else{

        const userInfo = {
          id:result.id,
          token : result.token
        }
        
        localStorage.setItem('userInfo' , JSON.stringify(userInfo));
        login(userInfo);
        navigate('/admin/dashboard');
        toast.success("Login successfully!");
      }
      
    } catch (error) {
      if (error.response) {
        console.error('Login Failed:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container my-5 d-flex justify-content-center">
          <div className="login-form my-5">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h4>Login Here</h4>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                      {...register('email', {
                        required: "This Field is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      type="text"
                      placeholder="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                    />
                    {errors.email && (
                      <p className="invalid-feedback">{errors.email?.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input
                      {...register('password', {
                        required: "This Field is required",
                      })}
                      type="password"
                      placeholder="Password"
                      className={`form-control ${errors.password && 'is-invalid'}`}
                    />
                    {errors.password && (
                      <p className="invalid-feedback">{errors.password?.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary large">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
