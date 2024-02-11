import { useState } from "react";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("./profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return (
        <div>
            <div>
                {notice !== "" && (
                    <div>
                        {notice}
                    </div>
                )}
                <form>
                    <div>
                        <input
                            type="email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                    </div>
                    <div>
                        <input
                            type="password"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="exampleInputPassword1">
                            Password
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={(e) => loginWithUsernameAndPassword(e)}
                        >
                            Submit
                        </button>
                    </div>
                    <div>
                        <span>
                            Need to sign up for an account? <Link to="./signup">Click here.</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
