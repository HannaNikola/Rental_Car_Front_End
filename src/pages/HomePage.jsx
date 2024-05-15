import { Img, Title } from "./HomePage.styled";
import image from '../images/home-img.jpg';

const HomePage = () => {
    return <div>
        <Title>Welcome to our page</Title>
        <Img src={image} alt="" />
    </div>
    
}

export default HomePage;