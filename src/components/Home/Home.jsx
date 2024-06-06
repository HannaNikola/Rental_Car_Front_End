import image from '../../images/home-img.jpg';
import { Img, Title } from "../../pages/HomePage.styled";
import { selectAdverts } from "helpers/selectors";
import { useSelector } from 'react-redux';
import '../../loader.css';


export const Home = () => {
    
    const { isLoading, error } = useSelector(selectAdverts);

    return (
        <div>
            {isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <span className="loader"></span>
            </div>}
            {error && <p>Error: {error}</p>}
        <Title>Welcome to our page</Title>
        <Img src={image} alt="" />
    </div>
    )
}