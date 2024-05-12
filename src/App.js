// App.js

import React from 'react';
import OAuthButton from './components/OAuthButton';  // Assuming OAuthButton is in the same directory

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Our Application</h1>
                <a href='http://localhost:3001/'>Login</a>
            </header>
        </div>
    );
}

export default App;
