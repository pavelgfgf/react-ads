import React, { useState } from "react";
import s from './styles.module.css'
import { setAds } from "../../api/ads/ads";
import { useNavigate } from "react-router";

const AdsModule = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState()
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await setAds(name, description, price, image)            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className={s.form_container}>
                <h2>Создание объявления</h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <label className={s.title}>Название</label>
                    <input
                        type="text"
                        className={s.title_inp}
                        placeholder="Введите название объявления"
                        required
                        onChange={handleChangeName}
                    />

                    <label className={s.description}>Описание</label>
                    <textarea
                        id="description"
                        className={s.description}
                        name="description"
                        placeholder="Введите описание"
                        required
                        onChange={handleChangeDescription}
                    />

                    <label className={s.price}>Цена (₽)</label>
                    <input
                        type="number"
                        className={s.price_inp}
                        min="0" step="0.01"
                        placeholder="Укажите цену"
                        required
                        onChange={handleChangePrice}
                    />

                    <label className={s.image}>Изображение</label>
                    <input type="file" className={s.image} accept="image/png, image/jpeg" onChange={(e)=>{
                        setImage(e.target.value)
                    }}/>

                    <button type="submit" className={s.btn_public} onClick={handleNavigate}>Опубликовать</button>
                </form>
            </div>
        </>
    )
};

export default AdsModule;
