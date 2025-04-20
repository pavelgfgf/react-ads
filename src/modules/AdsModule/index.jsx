import React, { useState } from "react";
import s from './styles.module.css'
import { setAds } from "../../api/ads/ads";
import { useNavigate } from "react-router";

const AdsModule = () => {
    const [data, setData] = useState({
        name: "1",
        description: "1",
        price: "1",
        image: "",
    });
    const navigate = useNavigate()

    // const handleNavigate = () => {
    //     navigate('/')
    // }
    const handleChangeImage = (e) => {
        setData((prev) => ({...prev, image:e.target.files[0]}))
    } 

    const handleSubmit = async (e) => {
        console.log('sdfsd');
        e.preventDefault()
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        console.log(fileField?.files[0]);
        
        formData.append("name", "abc123");
        formData.append("description", "abc123");
        formData.append("price", "123");
        formData.append("image", fileField?.files[0]);
        try {
            await setAds(formData)
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

                    />

                    <label className={s.description}>Описание</label>
                    <textarea
                        id="description"
                        className={s.description}
                        name="description"
                        placeholder="Введите описание"
                        required
 
                    />

                    <label className={s.price}>Цена (₽)</label>
                    <input
                        type="number"
                        className={s.price_inp}
                        min="0" step="0.01"
                        placeholder="Укажите цену"
                        required
                    />

                    <label className={s.image}>Изображение</label>
                    <input
                        type="file"
                        className={s.image}
                        accept="image/png, image/jpeg"
                        onChange={handleChangeImage}
                    />

                    <button type="submit" className={s.btn_public} >Опубликовать</button>
                </form>
            </div>
        </>
    )
};

export default AdsModule;
