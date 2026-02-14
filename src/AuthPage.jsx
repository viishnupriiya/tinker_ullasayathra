import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import './AuthPage.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verify auth logic here (mock for now)
        navigate('/vibe-check');
    };

    return (
        <div className="auth-container">
            <Card className="auth-card">
                <h2 className="auth-title">
                    {isLogin ? 'Welcome Back' : 'Join the Journey'}
                </h2>
                <p className="auth-subtitle">
                    {isLogin ? 'Ready for your next adventure?' : 'Start your story with Ullasayathra.'}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <Input
                            label="Full Name"
                            placeholder="e.g. Explorer John"
                            required
                        />
                    )}
                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        required
                    />

                    <Button type="submit" variant="primary" className="auth-submit">
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                </form>

                <div className="auth-footer">
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            type="button"
                            className="auth-toggle"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default AuthPage;
