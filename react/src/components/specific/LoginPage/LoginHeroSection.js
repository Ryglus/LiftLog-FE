import outdoorsy from "../../../assets/banners/outdoorsy.webp";
import {Link, useNavigate} from "react-router-dom";
import {FaApple, FaFacebook} from "react-icons/fa";
import React, {useState} from "react";
import {useAccount} from "../../../contexts/AccountContext";
import './LoginHeroSection.css'

const LoginHeroSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAccount(); // Get the login function from AccountContext

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Instead of directly calling AuthService, use AccountContext
            const { success, message } = await login(email, password);
            if (success) {
                navigate('/'); // Navigate to homepage on successful login
            } else {
                setError(message);
            }
        } catch (error) {
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className="hero-login-banner" style={{backgroundImage: `url(${outdoorsy})`, borderRadius: '20px'}}>
            <section className="container py-3 py-md-5 py-xl-8 px-md-5 px-lg-0">
                <div className="rt-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="display-5 fw-bold text-center">Sign in</h2>
                                <p className="text-center m-0">
                                    Don't have an account? <Link to="/register">Sign up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row gy-5 justify-content-center">
                                <div className="col-12 col-lg-5">
                                    <form onSubmit={handleLogin}>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control border-0 border-bottom rounded-0"
                                                        name="email"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control border-0 border-bottom rounded-0"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <label htmlFor="password"
                                                           className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row justify-content-between">
                                                    <div className="col-6">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                name="remember_me"
                                                                id="remember_me"
                                                            />
                                                            <label className="form-check-label text-secondary"
                                                                   htmlFor="remember_me">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="text-end">
                                                            <a href="/fogotpassword"
                                                               className="link-secondary text-decoration-none">Forgot
                                                                password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {error && <div className="col-12 text-danger">{error}</div>}
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-lg btn-dark rounded-0 fs-6"
                                                            type="submit">
                                                        Log in
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
                                    <div className="bg-dark h-100 d-none d-lg-block"
                                         style={{width: '1px', '--bs-bg-opacity': '.1'}}></div>
                                    <div className="bg-dark w-100 d-lg-none"
                                         style={{height: '1px', '--bs-bg-opacity': '.1'}}></div>
                                    <div>or</div>
                                    <div className="bg-dark h-100 d-none d-lg-block"
                                         style={{width: '1px', '--bs-bg-opacity': '.1'}}></div>
                                    <div className="bg-dark w-100 d-lg-none"
                                         style={{height: '1px', '--bs-bg-opacity': '.1'}}></div>
                                </div>
                                <div className="col-12 col-lg-5 d-flex align-items-center">
                                    <div className="d-flex gap-3 flex-column w-100">
                                        <span
                                           className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center">
                                            <FaApple className="text-dark"/>
                                            <span className="ms-2 fs-6 flex-grow-1">Continue with Apple</span>
                                        </span>
                                        <span
                                           className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center">
                                            <FaFacebook className="text-primary"/>
                                            <span
                                                className="ms-2 fs-6 flex-grow-1">Continue with Facebook</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default LoginHeroSection;