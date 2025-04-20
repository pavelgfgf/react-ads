import React, { useEffect, useState } from "react";
import s from './styles.module.css'
import Header from "../../common/components/Header";
import { deleteAd, getAds } from "../../api/ads/ads";
import { hostBase } from "../../api/const";

const IndexModule = () => {
    const [ads, setAds] = useState([])

    const token = localStorage.getItem("token"); // или другой способ получения текущего пользователя

    useEffect(() => {
        getAds().then((data) => {
            setAds(data)
        })
    }, [])

    const handleDelete = async (id) => {
        const confirm = window.confirm("Вы уверены, что хотите удалить это объявление?");
        if (!confirm) return;

        try {
            await deleteAd(id); // API-запрос на удаление
            setAds(prev => prev.filter(ad => ad.id !== id)); // удаляем из UI
        } catch (error) {
            console.error("Ошибка при удалении:", error);
            alert("Ошибка при удалении объявления");
        }
    };
    return (
        <>
            <Header />
            <section className={s.search}>
                <div className={s.search_bar}>
                    <button className={s.category_btn}>
                        🔍 Все категории
                    </button>
                    <input type="text" placeholder="Поиск по объявлениям" />
                    <button className={s.search_bth}>Найти</button>
                </div>

            </section>

            <div className={s.categories}>
                <a href=""><span>🧥 Одежда и обувь</span></a>
                <a href=""><span>🏡 Жильё для поездки</span></a>
                <a href=""><span>🛍️ Молл</span></a>
                <a href=""><span>🚗 Новые авто</span></a>
                <a href=""><span>✂️ Услуги для красоты</span></a>
                <a href=""><span>🚗 Гараж</span></a>
            </div>

            <div className={s.ads_container}>
                <h1 className={s.ads_title}>Список объявлений</h1>
                <div className={s.ads_grid}>
                    {ads.map((ad) => (
                        <div key={ad.id} className={s.ad_card}>
                            <img alt="Превью" className={s.ad_image} src={`${hostBase}${ad.image}`} />
                            <h2 className={s.ad_title}>{ad.name}</h2>
                            <p className={s.ad_description}>{ad.description}</p>
                            <p className={s.ad_price}>{ad.price} у.е</p>
                            <button className={s.ad_btn}>Подробнее</button>


                            {token?.id === ad.owner && (
                                <button
                                    className={s.delete_btn}
                                    onClick={() => handleDelete(ad.id)}
                                    style={{ marginTop: '10px', background: '#ff4d4f', color: '#fff' }}
                                >
                                    Удалить
                                </button>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default IndexModule;
