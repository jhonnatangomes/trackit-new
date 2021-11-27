import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Input from '../../shared/input';
import Button from '../../shared/button';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { signUp, signIn } from '../../services/api';
import { Ellipsis } from 'react-spinners-css';
import UserContext from '../../contexts/UserContext';

export default function Login() {
    const path = useLocation().pathname;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: '',
        image: '',
    });
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (path === '/cadastro') {
            setLoading(true);
            const promise = signUp(inputs);
            promise
                .then(() => {
                    alert('Usuário cadastrado com sucesso');
                    setLoading(false);
                    navigate('/');
                })
                .catch((err) => {
                    setLoading(false);
                    if (err.response.status === 409) {
                        alert('Usuário já cadastrado');
                    }
                    if (err.response.status === 422) {
                        alert('Digite uma imagem válida!');
                    }
                });
        } else {
            setLoading(true);
            const promise = signIn({
                email: inputs.email,
                password: inputs.password,
            });
            promise
                .then((res) => {
                    setLoading(false);
                    setUser(res.data);
                    localStorage.setItem(
                        'trackit-user',
                        JSON.stringify(res.data)
                    );
                    navigate('/hoje');
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        alert('Usuário e/ou senha inválidos');
                    }
                    setLoading(false);
                });
        }
    }

    return (
        <LoginContainer>
            <Logo src={logo} alt="Logo" />
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="email"
                    onChange={(e) =>
                        setInputs({ ...inputs, email: e.target.value })
                    }
                    disabled={loading}
                />
                <Input
                    placeholder="senha"
                    type="password"
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                    disabled={loading}
                />
                {path === '/cadastro' ? (
                    <>
                        <Input
                            placeholder="nome"
                            onChange={(e) =>
                                setInputs({ ...inputs, name: e.target.value })
                            }
                            disabled={loading}
                        />
                        <Input
                            placeholder="foto"
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    image: e.target.value,
                                })
                            }
                            disabled={loading}
                        />
                    </>
                ) : (
                    ''
                )}
                <Button
                    width="100%"
                    height="45px"
                    fontSize="20.98px"
                    lineHeight="26.22px"
                    disabled={loading}
                >
                    {loading ? (
                        <Ellipsis color="white" />
                    ) : path === '/' ? (
                        'Entrar'
                    ) : (
                        'Cadastrar'
                    )}
                </Button>
            </Form>
            {path === '/' ? (
                <Link to="/cadastro">
                    <StyledLink>Não tem uma conta? Cadastre-se!</StyledLink>
                </Link>
            ) : (
                <Link to="/">
                    <StyledLink>Já tem uma conta? Faça login!</StyledLink>
                </Link>
            )}
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    padding: 0 36px;
    text-align: center;
`;

const Logo = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
`;

const Form = styled.form`
    margin-bottom: 25px;
    input {
        margin-bottom: 6px;
    }
`;

const StyledLink = styled.span`
    font-size: 13.98px;
    line-height: 17.47px;
    color: ${colors.blue};
    text-decoration: underline;
`;
