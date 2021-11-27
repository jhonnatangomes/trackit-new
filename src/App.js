import GlobalStyle from './styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Today from './components/login/today/Today';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Login />} />
                <Route path="/hoje" element={<Today />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
