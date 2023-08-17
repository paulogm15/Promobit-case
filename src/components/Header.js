import { MainHeaderDiv, HeaderTitle, Filter } from './styles';


export const MainHeader = () => {

    return (
        <MainHeaderDiv>
            <HeaderTitle>Milhões de filmes, séries e pessoas para descobrir. Explore já.</HeaderTitle>
            <Filter>
                <h3>Filtre por: </h3>
                <button>generos dos filmes</button>
            </Filter>
        </MainHeaderDiv>
    )
}