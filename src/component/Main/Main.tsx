import React from 'react';
import {Header} from "../Header/Header";
import './Main.scss';
import img1 from '../../other/img/Rectangle 22.jpg';
import img2 from '../../other/img/Rectangle 23.jpg';
import img3 from '../../other/img/Rectangle 24.jpg';
import img4 from '../../other/img/Rectangle 25.jpg';
import img5 from '../../other/img/Rectangle 26.jpg';
import img6 from '../../other/img/Rectangle 27.jpg';
import { useDispatch, useSelector} from "react-redux";
import {ConditionType, dataCardsType, getData} from "../../store/shopReducer";
import {AppRootStateType} from "../../store/store";
import {Card} from "../Card/Card";
import Loading from "../Loading/Loading";


const state: dataCardsType = [
    {
        img: img1,
        title: "Кровать TATRAN",
        description: "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект",
        price: 120000,
        id: 1,
        countMax: 10,
        buy: false,
        like: false
    }, {
        img: img2,
        title: "Кресло VILORA",
        description: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
        price: 21000,
        id: 2,
        countMax: 5,
        buy: false,
        like: false
    }, {
        img: img3,
        title: "Стол MENU",
        description: "Европейский дуб - отличается особой прочностью и стабильностью.",
        price: 34000,
        id: 3,
        countMax: 15,
        buy: false,
        like: false
    }, {
        img: img4,
        title: "Диван ASKESTA",
        description: "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
        price: 68000,
        id: 4,
        countMax: 55,
        buy: false,
        like: false
    }, {
        img: img5,
        title: "Кресло LUNAR",
        description: "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
        price: 40000,
        id: 5,
        countMax: 31,
        buy: false,
        like: false
    }, {
        img: img6,
        title: "Шкаф Nastan",
        description: "Мебель может быть оснащена разнообразными системами подсветки.",
        price: 80000,
        id: 6,
        countMax: 11,
        buy: false,
        like: false
    }
]

function Main() {
    const dispatch = useDispatch()
    const data = useSelector<AppRootStateType, dataCardsType>((state) => state.shopReducer.dataCards)
    const condition = useSelector<AppRootStateType, ConditionType>((state) => state.shopReducer.condition)
    if (condition.loading) {
        dispatch(getData(state))
    }
    const sortData = () => {
        if (condition.filterPrice === 1) {
            return data.sort((a, b) => a.price - b.price)
        }
        if (condition.filterPrice === 2) {
            return data.sort((a, b) => b.price - a.price)
        } else return data
    }

    return (
        <>
            {condition.loading ? <Loading/> :
                <div className="App">
                    <Header/>
                    <div className={"wrapperCards"}>
                        {sortData().map((s) => {
                            return <div key={s.id}>
                                <Card img={s.img} title={s.title} description={s.description} price={s.price}
                                      id={s.id} countMax={s.countMax} buy={s.buy} like={s.like}/>
                            </div>
                        })}
                    </div>
                </div>}
        </>
    );
}

export default Main;
