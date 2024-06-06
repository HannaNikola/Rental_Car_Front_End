import {
    LiElement,
    ImgElement,
    BoxSvg,
    ImgBox,
    TextBox,
    Title,
    TextReview,
    BoxNamePrice,
    BoxRating,
    TextPrice,
} from '../Card/Card.styled';

import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";


export const Card = ({ item, children }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('uk-UA', { minimumFractionDigits: 2 }).format(price).replace(/\s/g, '');;
    }
    return (
        <LiElement key={item._id}>
            <ImgBox>
                <ImgElement src={item.gallery[0]} alt={item.name} />
            </ImgBox>
            <TextBox>
                <BoxNamePrice>
                    <Title>{item.name}</Title>
                    <BoxSvg>
                        <TextPrice>${formatPrice(item.price)}</TextPrice>
                        <FavoriteButton adId={item._id} />
                    </BoxSvg>
                </BoxNamePrice>
                <BoxRating>
                    <TextReview>
                        <IoStarSharp
                            style={{
                                width: '16px',
                                height: '16px',
                                gap: '4px',
                                color: '#FFC531',
                            }}
                        />
                        {item.rating}(Reviews)
                    </TextReview>
                    <p>
                        <IoLocationOutline
                            style={{ width: '16px', height: '16px', gap: '4px' }}
                        />
                        {item.location}
                    </p>
                </BoxRating>
                {children}
            </TextBox>
        </LiElement>
    );
};




   