import React from "react";
import './style.scss';
import {ReactComponent as Up} from '../../../other/img/up.svg';
import {useDispatch} from "react-redux";
import {delBasket, downCounter, upCounter} from "../../../store/shopReducer";

type BasketCounterType = {
    count: number,
    id: number,
    price: number,
    maxCounter: number
}
export const BasketCounter: React.FC<BasketCounterType> = ({count, id, price,maxCounter}) => {
    const dispatch = useDispatch()

    const onUpCounter = () => {
        dispatch(upCounter(id, price))
    }

    const onDownCounter = () => {
        if (count !== 1) {
            dispatch(downCounter(id, price))
        } else {
            dispatch(delBasket(id, price))
        }
    }

    return (<div className={"wrapperBasketCard"}>
        <div className={"countBasketCard"}><p className={"numberCountBasketCard"}>{count}</p>
            <div className={"btnCountBasketCardWrapper"}>
                <button onClick={onUpCounter} disabled={count === maxCounter}><Up/></button>
                <button onClick={onDownCounter}><Up className={"btnDownSvg"}/></button>
            </div>
        </div>
            {count === maxCounter?<p>Больше товаров нет</p>:""}
        </div>
    );
};


