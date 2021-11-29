import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function ProtectedRoute({ isAuthenticated, children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            alert('Você não está logado!');
            navigate('/');
        }
    }, []);

    if (!isAuthenticated) return null;
    return children;
}
