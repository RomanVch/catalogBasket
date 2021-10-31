import './style.scss';
import {styled} from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setFilterAC} from "../../store/shopReducer";
import {BasketBlock} from "../BasketBlock/BasketBlock";


export const Header = () => {
    const [filter, setFilter] = useState("");
    const allPrice = useSelector<AppRootStateType, number>((store) => store.shopReducer.condition.endPrice)

    const dispatch = useDispatch()
    const handleChange = (event: any) => {
        setFilter(event.target.value);
        dispatch(setFilterAC(+event.target.value))
    };
    const BootstrapInput = styled(InputBase)(({theme}) => ({
        "label + &": {
            marginTop: theme.spacing(3)
        },
        "& .MuiInputBase-input": {
            borderRadius: 50,
            position: "relative",
            width: "300px",
            backgroundColor: theme.palette.background.paper,
            border: "1px solid #C4C4C4",
            fontSize: 14,
            height: "25px",
            padding: "0px 26px 0px 12px",
            transition: theme.transitions.create(["border-color", "box-shadow"]),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                "Montserrat"
            ].join(","),
            "&:focus": {
                borderRadius: 4,
                borderColor: "#80bdff",
                boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
            }
        }
    }));


    return (
        <div className="header">
            <p> Главная <span className={"header_main"}>Калог товаров</span></p>
            <BasketBlock allPrice={allPrice}/>
            <div>
                <FormControl sx={{m: 1}} variant="standard">
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={filter}
                        onChange={handleChange}
                        input={<BootstrapInput/>}
                    >
                        <option value={1}>сперва дешевле</option>
                        <option value={2}>сперва дороже</option>
                    </NativeSelect>
                </FormControl>
            </div>
        </div>
    );
}


