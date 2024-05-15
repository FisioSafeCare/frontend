import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProfileForm from './components/ProfileForm';

function App() {
    return (
        <div>
            <h1>Welcome to Profile SaaS</h1>
            <RegisterForm />
            <LoginForm />
            <ProfileForm />
        </div>
    );
}

export default App;