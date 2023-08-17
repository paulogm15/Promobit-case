import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 176px;
    height: auto;
    flex-shrink: 0;
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }

`

export const MoviesCard = () => {

    const navigate = useNavigate()
    const goToDetails = () => {
        navigate("/details");

    }

    return (
        <MovieCard onClick={goToDetails}>
            <img alt="banner do filme em questão" src="https://picsum.photos/100/150" />
            <p>Nome do filme</p>
            <p>data de lançamento</p>
        </MovieCard>
    )
}