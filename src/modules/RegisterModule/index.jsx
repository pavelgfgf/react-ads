import React, { useState} from "react";
import s from './styles.module.css'
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../../api/auth/register";

const RegisterModule = () => {
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
          await register(email, password)
      } catch (error) {
          console.error(error);
      }
  }

  return (
      <>

          <div className={s.wrapper}>
              <div className={s.register_container}>
                  <h2>Зарегистрироваться</h2>

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

                      <button type="submit" className={s.btn_primary} onClick={handleNavigation}>Зарегистророваться</button>
                  </form>

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

export default RegisterModule;
