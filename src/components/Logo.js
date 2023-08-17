import { Logo } from "./styles"
import img from '../imgs/small-logo.svg'
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    }

    return (
        <Logo>
            <img alt="logo do site" src={img} onClick={goToHomePage} />
        </Logo>
    )
}