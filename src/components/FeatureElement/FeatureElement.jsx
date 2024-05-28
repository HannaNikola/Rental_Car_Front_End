import { FormElement } from 'components/FormElement/FormElement';
import { BoxContainerFeater, BoxFeature } from '../FeatureElement/FeatureElement.styled';
import { selectDetails } from "helpers/selectors";
import {useSelector} from "react-redux";


export const FeatureElement = () => {
    const {  details } = useSelector(selectDetails);
    return (
        <BoxContainerFeater>
            <BoxFeature>
            <h1>Vehicle details</h1>
                <p>Form{details.form}</p>
                <p>Length{details.length}</p>
                <p>Width{details.width}</p>
                <p>Heigth{details.height}</p>
                <p>Tank{details.tank}</p>
                <p>Consumption{details.consumption}</p>
            
            </BoxFeature>
            <FormElement />
        </BoxContainerFeater>
    );
};
