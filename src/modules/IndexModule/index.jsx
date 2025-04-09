import React from "react";
import s from './styles.module.css'
import Header from "../../common/components/Header";

const IndexModule = () => {
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
            
        
        </>
    );
};

export default IndexModule;
