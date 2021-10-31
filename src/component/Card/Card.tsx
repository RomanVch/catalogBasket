import './style.scss';
import {getMoneyFormat} from "../../func/getMoneyFormater/getMoneyFirmater";
import {ReactComponent as Basket} from '../../other/img/addToCart.svg';
import {ReactComponent as Like} from '../../other/img/heartOutline.svg';
import {useDispatch} from "react-redux";
import {addBasket, delBasket, likeSwitcher} from "../../store/shopReducer";

type CardType = {
    img: string,
    title: string,
    description: string,
    price: number,
    id: number,
    countMax:number,
    buy:boolean,
    like:boolean,
}

export const Card: React.FC<CardType> = ({img, title, description, price,id,countMax,buy,like}) => {

    const dispatch = useDispatch()
    const likeHandler = () => {
        dispatch(likeSwitcher(id))
    }
    const basketHandler = (basketSwitch: boolean, id: number, img: string, description: string, title: string,
                           price: number,
                           amount: number,countMax:number,buy:boolean,like:boolean
    ) => {
        if (!buy) {
            dispatch(addBasket({id,img,description,title,price,amount,countMax,buy,like}))
        }if(buy){
            dispatch(delBasket(id,price))
        }
    }
    return (
        <div className={"containerCard"}>
            <div className={"wrapperImgs"}>
                <div className={"wrapperButton"}>
                    <button onClick={()=>{basketHandler(!buy,id,img,description,title,price,1,countMax,buy,like)}} className='btnImg'>
                        <Basket className={buy ? 'home__icon' : "likeHover"}/>
                    </button>
                    <button className='btnImg' type={"button"} onClick={likeHandler}>
                        <Like fill="red" className={like ? 'home__icon' : "likeHover"}/>
                    </button>
                </div>
                <img src={img} alt={title}/>
            </div>
            <h2 className={"title"}>{title}</h2>
            <p className={"description"}>{description}</p>
            <p className={"price"}>{`${getMoneyFormat(price) + " руб."}`}</p>
        </div>
    );
}


