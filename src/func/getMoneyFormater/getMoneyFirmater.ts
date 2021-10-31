export const getMoneyFormat = (money: string | number | null): string => {
    return money ? new Intl.NumberFormat("ru-RU").format(+money) : "0";
}