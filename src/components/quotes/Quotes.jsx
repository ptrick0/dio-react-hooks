import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../../components';

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Namastê</Button>
        </Wrapper>
    ); 
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 800px){
        flex: 0;
    }
`;

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

Quote.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;