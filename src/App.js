import GlobalStyle from './styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Today from './components/today/Today';
import Habits from './components/habits/Habits';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Login />} />
                    <Route
                        path="/hoje"
                        element={
                            <ProtectedRoute isAuthenticated={user}>
                                <Today />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/habitos"
                        element={
                            <ProtectedRoute isAuthenticated={user}>
                                <Habits />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
