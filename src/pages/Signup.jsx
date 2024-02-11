import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return (
        <div>
            <div>
                {notice !== "" && (
                    <div>
                        {notice}
                    </div>
                )}
                <div>
                    <input
                        id="signupEmail"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="signupEmail">
                        Enter an email address for your username
                    </label>
                </div>
                <div>
                    <input
                        id="signupPassword"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="signupPassword">
                        Password
                    </label>
                </div>
                <div>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={(e) => signupWithUsernameAndPassword(e)}
                    >
                        Signup
                    </button>
                </div>
                <div>
                    <span>
                        Go back to login? <Link to="/">Click here.</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;
