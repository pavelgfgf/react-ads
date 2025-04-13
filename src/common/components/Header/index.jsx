import React from "react";
import s from './styles.module.css'
import { useNavigate } from "react-router";

const Header = () => {
    const navitage = useNavigate()

    const handleClick = () => {
        navitage(`/ads`)
    }

    return (
        <>
            <header>
                <div className={s.navbar}>
                    <nav className={s.left_menu}>
                        <a href="">Для бизнеса</a>
                        <a href="">Карьера в авито</a>
                        <a href="">Помощь</a>
                        <a href="">Каталоги</a>
                    </nav>

                    <div className={s.right_menu}>
                        <nav>
                            <a href="">❤</a>
                            <a href="">🛒</a>
                            <a href="/login" className={s.login}>Войти и зарегистрироваться</a>
                            <button className={s.post_ad} onClick={handleClick}>Разместить объявление</button>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header

