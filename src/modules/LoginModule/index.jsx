import React, { useState } from "react";
import s from './styles.module.css'
import { login } from "../../api/auth/login";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const LoginModule = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleNavigation = () => {

        if (email && password) {
            toast.success('Успешно авторизовались')
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } else {
            toast.error('Ошибка')
        }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>

            <div className={s.wrapper}>
                <div className={s.login_container}>
                    <h2>Вход</h2>

                    <form method="POST" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Почта"
                            required
                            onChange={handleChangeEmail}
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            onChange={handleChangePassword}
                            required
                        />

                        <div className={s.options}>
                            <input type="checkbox" />
                            <label>
                                Запомнить пароль
                            </label>
                            <a href="#">Забыли пароль?</a>

                        </div>

                        <button type="submit" className={s.btn_primary} onClick={handleNavigation}>Войти</button>
                    </form>

                    <div className={s.register_section}>
                        <p>Нет аккаунта на Avito?</p>
                        <Link to='/register' className={s.btn_secondary}>Зарегистрироваться</Link>
                    </div>
                    <p className={s.policy}>
                        При регистрации и входе вы соглашаетесь с
                        <a href="#"> условиями использования Avito</a> и
                        <a href="#"> политикой конфиденциальности</a>.
                    </p>
                </div>
                <ToastContainer position='top-center' />
            </div>

        </>
    );
};

export default LoginModule;
