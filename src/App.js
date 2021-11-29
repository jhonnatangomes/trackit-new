import GlobalStyle from './styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Today from './components/today/Today';
import Habits from './components/habits/Habits';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import TopBar from './components/topBar/TopBar';
import Menu from './menu/Menu';
import History from './components/history/History';
import React, { useEffect, useState } from 'react';
import UserContext from './contexts/UserContext';
import ProgressContext from './contexts/ProgressContext';

function App() {
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(0);
    const userLocalStorage = localStorage.getItem('trackit-user');

    useEffect(() => {
        if (userLocalStorage) {
            setUser(JSON.parse(userLocalStorage));
        }
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <ProgressContext.Provider value={{ progress, setProgress }}>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Login />} />
                        <Route
                            path="/hoje"
                            element={
                                <ProtectedRoute
                                    isAuthenticated={userLocalStorage}
                                >
                                    <TopBar />
                                    <Today />
                                    <Menu />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/habitos"
                            element={
                                <ProtectedRoute
                                    isAuthenticated={userLocalStorage}
                                >
                                    <TopBar />
                                    <Habits />
                                    <Menu />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/historico"
                            element={
                                <ProtectedRoute
                                    isAuthenticated={userLocalStorage}
                                >
                                    <TopBar />
                                    <History />
                                    <Menu />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </ProgressContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
