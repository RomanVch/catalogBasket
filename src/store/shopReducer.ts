type InitialStateType = {
    condition: ConditionType,
    dataCards: dataCardsType | []
    basket: goodsType[] | []
}
export type ConditionType = {
    filterPrice: number,
    loading: boolean,
    endPrice: number
}
export type dataCardsType = {
    img: string,
    title: string,
    description: string,
    price: number,
    id: number,
    countMax: number,
    buy: boolean,
    like: boolean
}[]

export type goodsType = {
    id: number,
    img: string,
    description: string,
    title: string
    price: number
    amount: number,
    countMax: number,
    buy: boolean,
    like: boolean
}


const initialState: InitialStateType = {
    condition: {
        filterPrice: 0,
        loading: true,
        endPrice: 0
    },
    dataCards: [],
    basket: []
}

type ActionsType =
    GetDataType
    | GetFilterType
    | AddBasketType
    | DelBasketType
    | UpCounterType
    | DownCounterType
    | CleanBasketType
    | LikeSwitcherType


export const shopReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET-DATA':
            return {...state, dataCards: action.data, condition: {...state.condition, loading: false}}
        case 'GET-FILTER':
            return {...state, condition: {...state.condition, filterPrice: action.filter}}
        case 'ADD-BASKET': {
            const actualDataCard = state.dataCards.map((g) => {
                if (g.id === action.goods.id) {
                    return {...g, buy: true}
                }
                return g
            })
            return {
                ...state,
                basket: [...state.basket, action.goods],
                condition: {...state.condition, endPrice: state.condition.endPrice + action.goods.price},
                dataCards: actualDataCard
            }
        }
        case 'DEL-BASKET': {
            const actualDataCard = state.dataCards.map((g) => {
                if (g.id === action.id) {
                    return {...g, buy: false}
                }
                return g
            })
            const good = state.basket.filter((s) => {
                return s.id === action.id
            });
            return {
                ...state,
                basket: state.basket.filter((s) => {
                    return s.id !== action.id
                }),
                condition: {...state.condition, endPrice: state.condition.endPrice - (good[0].amount * action.price)},
                dataCards: actualDataCard
            }
        }
        case 'UP-COUNTER': {
            return {
                ...state,
                condition: {...state.condition, endPrice: state.condition.endPrice + action.price},
                basket: state.basket.map((g) => {
                    if (g.id === action.id) {
                        return {...g, amount: g.amount + 1}
                    }
                    return g
                })
            }
        }
        case 'DOWN-COUNTER': {
            return {
                ...state,
                condition: {...state.condition, endPrice: state.condition.endPrice - action.price},
                basket: state.basket.map((g) => {
                    if (g.id === action.id) {
                        return {...g, amount: g.amount - 1}
                    }
                    return g
                })
            }
        }
        case 'CLEAN-BASKET':
            const actualDataCard = state.dataCards.map((g) => {
                    return {...g, buy: false}
            })
            return {...state, condition: {...state.condition, endPrice: 0}, basket: [], dataCards:actualDataCard}
        case 'LIKE-SWITCHER': {
            return {
                ...state, dataCards: state.dataCards.map((g) => {
                    if (g.id === action.id) {
                        return {...g, like: !g.like}
                    }
                    return g
                })
            }
        }
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export const getData = (data: dataCardsType): GetDataType => ({type: 'GET-DATA', data})
export const setFilterAC = (filter: number): GetFilterType => ({type: 'GET-FILTER', filter})
export const addBasket = (goods: goodsType): AddBasketType => ({type: 'ADD-BASKET', goods})
export const upCounter = (id: number, price: number): UpCounterType => ({type: 'UP-COUNTER', id, price})
export const downCounter = (id: number, price: number): DownCounterType => ({type: 'DOWN-COUNTER', id, price})
export const delBasket = (id: number, price: number): DelBasketType => ({type: 'DEL-BASKET', id, price})
export const cleanBasket = (): CleanBasketType => ({type: 'CLEAN-BASKET'})
export const likeSwitcher = (id: number): LikeSwitcherType => ({type: 'LIKE-SWITCHER', id})


type GetDataType = {
    type: 'GET-DATA',
    data: dataCardsType
}
type GetFilterType = {
    type: 'GET-FILTER',
    filter: number
}
type LikeSwitcherType = {
    type: 'LIKE-SWITCHER',
    id: number
}
type AddBasketType = {
    type: 'ADD-BASKET',
    goods: {
        id: number,
        img: string,
        description: string,
        title: string
        price: number
        amount: number,
        countMax: number,
        buy: boolean,
        like: boolean
    }
}
type DelBasketType = {
    type: 'DEL-BASKET',
    id: number,
    price: number
}
type UpCounterType = {
    type: 'UP-COUNTER',
    id: number,
    price: number
}
type DownCounterType = {
    type: 'DOWN-COUNTER',
    id: number,
    price: number
}
type CleanBasketType = {
    type: 'CLEAN-BASKET'
}