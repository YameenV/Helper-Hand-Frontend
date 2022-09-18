import React, { useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import app from '../../firebase/base.js';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer.js';
// import './signup.scss';
import  { signInWithGoogle } from "../../firebase/base";
import './signup.css';

const Signup = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/dashboard");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div id="background" className="h-screen bg-black-800 dark:bg-gray-900 transition duration-500 splash-screen dark:splash-screen-dark  bg-signup">
          <Navbar />
          <div className="mx-auto text-center align-middle w-min pt-32 flex">
            <div className="p-10 lg:p-24 bg-gray-200 dark:bg-gray-700 transition duration-500 w-m rounded">
              <h1 className="text-5xl text-black dark:text-blue-500 font-bold mb-5 transition duration-500"><span className="text-blue-500 dark:text-white transition duration-500">Helper's</span> Hands</h1>
              <form onSubmit={handleSignUp}>
              <input className="input-text font-bold placeholder-blue-500 text-black dark:text-white w-60 rounded text-center mb-10" name="age" type="text" placeholder="Age" />
                     <input className="input-email font-bold placeholder-blue-500 bg-gray-600 text-black dark:text-white w-60 rounded my-5 text-center" name="email" type="email" placeholder="Email" />
                <input className="input-password font-bold placeholder-blue-500 text-black dark:text-white w-60 rounded text-center mb-10" name="password" type="password" placeholder="Password" />
                <input className="input-age font-bold placeholder-blue-500 text-black dark:text-white w-60 rounded text-center mb-10" name="adhar" type="text" placeholder="Aadhar Number" />
                <input className="input-text font-bold placeholder-blue-500 text-black dark:text-white w-60 rounded text-center mb-10" name="adress" type="text" placeholder="Adress" />
                <input className="input-text font-bold placeholder-blue-500 text-black dark:text-white w-60 rounded text-center mb-10" name="age" type="text" placeholder="Age" />
                <button className="font-bold bg-blue-400 hover:bg-blue-500 w-60 p-2 rounded transition-all duration-300" type="submit">Sign Up</button>
                <p className="mt-5 px-5 font-bold text-black dark:text-white transition duration-500">Already have an account? <Link to="/login" className="text-blue-500 cursor-pointer">Log In</Link></p>
              </form>
              <div className="login-button google"> <button  onClick={signInWithGoogle} className="font-bold bg-blue-400 hover:bg-blue-500 w-60 p-2 rounded transition-all duration-300 gb-sb" type="submit"><i className="fab fa-google gb-sg "></i>Sign in with google</button></div>
           
            </div>
          </div>
          <Footer />
        </div>
  );
}

export default withRouter(Signup);