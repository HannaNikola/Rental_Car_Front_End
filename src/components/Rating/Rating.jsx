
import { IoStarSharp } from "react-icons/io5";
import { IconContext } from 'react-icons';


export const Rating = ({rating}) => {
    
    const totalStars = 5;

    return (
        <div>
            {Array.from({ length: totalStars }, (_, index) => (
                <IconContext.Provider key={index}
                    value={{ color: index < rating ? '#FFC531' : '#F2F4F7', size: '16px' }}>
                    <IoStarSharp /></IconContext.Provider>
            ))}
        </div>
    )
}

