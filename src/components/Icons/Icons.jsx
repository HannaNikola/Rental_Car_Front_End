import Icon from '../../svg/symbol-defs.svg';

export const Svg = ({ id, width, height }) => {
    
    return (
        <svg width={width} height={height}>
            <use href={Icon + id}></use>
        </svg>
    )
}

