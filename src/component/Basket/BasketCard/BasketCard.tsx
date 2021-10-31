import './style.scss';
import {useDispatch} from "react-redux";
import {getMoneyFormat} from "../../../func/getMoneyFormater/getMoneyFirmater";
import {BasketCounter} from "../BasketCounter/BasketCounter";
import {delBasket} from "../../../store/shopReducer";



type CardType = {
    img: string,
    title: string,
    description: string,
    price: number,
    id: number,
    count: number,
    maxCount:number,
    onHandler?: () => void,
}

export const BasketCard: React.FC<CardType> = ({img, title, description, price, id, count,maxCount}) => {

    const dispatch = useDispatch()
    const DelGood = ()=>{dispatch(delBasket(id,price))}
    return (
        <div className={"containerBasketCard"}>
            <div className={"wrapperBasketImgs"}>
                <img src={img} alt={title} width={179} height={179}/>
            </div>
            <div className={"wrapperTextBasketCard"}>
                <h2 className={"title"}>{title}</h2>
                <p className={"description"}>{description}</p>
                <p className={"price"}>{`${getMoneyFormat(price) + " руб."}`}</p>
                <div className={"btnGroupBasketCard"}>
                    <button className={"btnBasketCard"}>Избранные</button>
                    <button onClick={DelGood} className={"btnBasketCard"}>Удалить</button>
                </div>
            </div>
           <div className={"wrapperCount"}>
                <BasketCounter count={count} id={id} price={price} maxCounter={maxCount}/>
            </div>
        </div>
    );
}


