import React from "react";
import './style.scss';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ConditionType} from "../../../store/shopReducer";
import {TextField} from "@mui/material";
import {getMoneyFormat} from "../../../func/getMoneyFormater/getMoneyFirmater";

export const BasketForm: React.FC = () => {
    const condition = useSelector<AppRootStateType, ConditionType>((store) => store.shopReducer.condition)
    return (
        <form className={"wrapperBasketForm"}>
            <h2 className={"headerBasketForm"}>Оформление заказа</h2>
            <div className={"wrapperInputForm"}>
                <TextField id="Name" label="Имя Фамилия" variant="standard"/>
            </div>
            <div className={"wrapperInputForm"}>
                <TextField id="tel" label="Телефон" variant="standard"/>
            </div>
            <div className={"wrapperInputForm"}>
                <TextField id="Address" label="Адрес" variant="standard"/>
            </div>
            <p className={"amountForm"}>Итого: <span>{`${getMoneyFormat(condition.endPrice)} руб.`}</span></p>
            <button className={"btnForm"}> Оформить заказ</button>
        </form>
    );
};

