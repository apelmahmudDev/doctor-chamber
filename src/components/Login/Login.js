import React, { useContext, useState } from 'react';
import './Login.css';
import loginImage from'../../images/group.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../UserProvider/UserProvider';
import { useHistory } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    let history = useHistory();

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useContext(UserContext);

    const newUserHandler = () => {
        setNewUser(!newUser);
    }
    
    const handleBlur = (event) => {
        let isFieldValid = true;
        if(event.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        if(!newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user };
                newUserInfo.isSignedIn = true;
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(function(error) {
                const newUserInfo = {...user };
                newUserInfo.isSignedIn = false;
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo);
                history.replace('/dashboard/dashboard');
            });
        }
        if(newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user };
                newUserInfo.isSignedIn = true;
                newUserInfo.success = true;
                setUser(newUserInfo);
                history.replace('/dashboard/dashboard');
            })
            .catch(function(error) {
                const newUserInfo = {...user };
                newUserInfo.isSignedIn = false;
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
        }
        event.preventDefault();
    }

    return (
        <section>
           <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-5">
                        <div className="login-area ">
                            <h3 className="text-brand text-center mb-4">{newUser ? 'Login ' : 'Create an Account '}</h3>
                            <form onSubmit={handleSubmit}>
                                <input onBlur={handleBlur} type="text" name="name" placeholder="Your Name" className="form-control" style={{display: newUser && 'none'}}/>
                                <input onBlur={handleBlur} type="email" name="email" placeholder="Your Email" className="form-control" required/>
                                <input onBlur={handleBlur} type="password" name="password" placeholder="Password" className="form-control" required/>
                                <button type="submit" className="btn btn-brand">Sign In</button>
                            </form>
                            {user.success ? 
                                <p className="text-success">Account has been created successfully</p>:
                                <p className="text-danger">{user.error}</p>
                            }
                            <div className="text-right">
                                <p onClick={newUserHandler} className="sign-option">{newUser ? 'Create an Account ' : 'Signed in User '}?</p> 
                            </div>
                        </div>
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