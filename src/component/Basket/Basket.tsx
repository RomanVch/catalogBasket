import React from "react";
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {goodsType} from "../../store/shopReducer";
import {BasketCard} from "./BasketCard/BasketCard";
import {BasketForm} from "./FormBasket/FormBasket";
import {Link} from "react-router-dom";

export const Basket: React.FC = () => {
    const goods = useSelector<AppRootStateType, goodsType[]>((store) => store.shopReducer.basket)
    const dispatch = useDispatch()
    const cleanBasket = () => {
        dispatch({type:'CLEAN-BASKET'})
    }
    return (
        <div className={"basketWrapper"}>
            {goods.length ?
                <div className={"headGoodsWrapper"}>
                    <div className={"basketHeaderWrapper"}>
                        <p className={"header"}>Товар</p>
                        <p className={"header"}>К-во</p>
                    </div>
                    <div className={"goodsFormBasket"}>

                        <div>{goods.map((g) => {
                            return <BasketCard img={g.img} title={g.title} description={g.description} price={g.price}
                                               id={g.id}
                                               count={g.amount} maxCount={g.countMax}/>
                        })}</div>
                    </div>
                    <div className={"btnBasketGroup"}>
                        <button className={"btnCard"} onClick={()=>cleanBasket()}>Очистить корзину</button>
                        <Link className={"LinkBasket"} to={"/"}>Продолжить покупки</Link>
                    </div>
                </div> : <>
                    <div className={"basketNull"}>Корзина пуста</div>
                    <Link className={"LinkBasket"} to={"/"}>Продолжить покупки</Link></>}
            <div><BasketForm/></div>

        </div>
    );
};


