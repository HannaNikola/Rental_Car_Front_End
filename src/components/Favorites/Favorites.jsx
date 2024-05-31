import { useSelector } from "react-redux";
import { selectAdverts } from "helpers/selectors";
import { LiElement, ImgElement, Box, BoxSvg, ImgBox, TextBox, Title, TextReview, BoxNamePrice, BoxRating, TextPrice } from '../Catalog/Catalog.styled';
import { TitleFavorits } from '../Favorites/Favorites.styled';
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const Favorites = () => {
    const favorites = useSelector(state => state.favorite.favorites);
    const { items } = useSelector(selectAdverts);

    const favoriteItems = items.filter(item => favorites.includes(item._id));
    console.log("item", favoriteItems);

    return (
        <div>
            <TitleFavorits>Favorite </TitleFavorits>
            <Box>
                {favoriteItems.map((item) => (
                    <LiElement key={item._id}>
                        <ImgBox>
                            <ImgElement src={item.gallery[0]} alt={item.name} />
                            </ImgBox>
                        <TextBox>
                            <BoxNamePrice>
                                <Title>{item.name}</Title>
                                <BoxSvg>
                                    <TextPrice>${item.price}</TextPrice>
                                    <FavoriteButton adId={item.adId} />
                                </BoxSvg>
                            </BoxNamePrice>
                            <BoxRating>
                                <TextReview>
                                    <IoStarSharp style={{ width: "16px", height: "16px", gap: "4px", color: "#FFC531" }} />
                                    {item.rating}(Reviews)
                                </TextReview>
                                <p>
                                    <IoLocationOutline style={{ width: "16px", height: "16px", gap: "4px" }} />
                                    {item.location}
                                </p>
                            </BoxRating>
                        </TextBox>
                    </LiElement>
                ))}
            </Box>
        </div>
    );
};