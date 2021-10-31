import React from "react";
import {ReactComponent as BasketAll} from '../../other/img/shoppingBasket-svgrepoCom.svg';
import {getMoneyFormat} from "../../func/getMoneyFormater/getMoneyFirmater";
import './style.scss';
import {Link} from "react-router-dom";

type BasketBlockType={
    allPrice:number
}

export const BasketBlock:React.FC<BasketBlockType> = ({allPrice}) => {
  return (
    <Link className={"basketBlock"} to={"/basket"}>
        <div>
        <BasketAll height={20} width={20}/>
        </div>
        <p>{`${getMoneyFormat(allPrice) + " руб."}`}</p>
    </Link>
  );
};


