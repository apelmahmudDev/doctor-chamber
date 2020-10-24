import React from 'react';
import loginImage from'../../images/group.png';

const Login = () => {
    
    const handleBlur = (event) => {
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section>
           <div className="container login-form">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={handleSubmit}>
                            <input onBlur={handleBlur} type="email" name="email" placeholder="Your Email" className="form-control"/>
                            <input onBlur={handleBlur} type="password" name="password" placeholder="Password" className="form-control"/>
                            <button type="submit" className="btn btn-brand">Sign In</button>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <img src={loginImage} alt="" className="img-fluid"/>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Login;