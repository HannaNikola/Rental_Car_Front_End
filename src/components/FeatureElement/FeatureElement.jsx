import { FormElement } from 'components/FormElement/FormElement';
import { BoxContainer, BoxFeature, BoxContent, TitleFeature, BoxItems, List, ListSpan } from '../FeatureElement/FeatureElement.styled';
import { selectDetails } from "helpers/selectors";
import {useSelector} from "react-redux";


export const FeatureElement = () => {
    const {  details } = useSelector(selectDetails);
    return (
        <BoxContainer>
            <BoxContent>
                <BoxFeature>
                <TitleFeature>Vehicle details</TitleFeature>
                <BoxItems>
                    <List>Form<ListSpan>{details.form}</ListSpan></List>
                    <List>Length<ListSpan>{details.length}</ListSpan></List>
                    <List>Width<ListSpan>{details.width}</ListSpan></List>
                    <List>Height<ListSpan>{details.height}</ListSpan></List>
                    <List>Tank<ListSpan>{details.tank}</ListSpan></List>
                    <List>Consumption<ListSpan>{details.consumption}</ListSpan></List>
                    </BoxItems>
                </BoxFeature>
            </BoxContent>
            <FormElement />
        </BoxContainer>
    );
};
