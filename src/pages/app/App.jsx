import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import meditationImg from '../../images/meditation.png';
import { Quotes } from "../../components";
import { getQuote } from "../../services";
import bemTeVi from '../../sounds/bem-te-vi.mp3';


const audio = new Audio(bemTeVi);

export function App() {
    const isMounted = useRef(true);

    const [ quoteState, setQuoteState ] = useState({
        quote: 'loading quote...',
        speaker: 'loading speaker...'
    })

    const onUpdate = async () => {
        const quote = await getQuote();

        if (isMounted.current) {
            audio.play();
    
            const quoteFormatted = {
                "quote": quote[0].q,
                "speaker": quote[0].a
            }
    
            setQuoteState(quoteFormatted);
        }
    };

    useEffect(() => {
        onUpdate();
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate}/>
            <MeditationImg src={meditationImg} alt="mulher meditando"/>
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column-reverse;
        padding: 0 10px;
    }
`;

const MeditationImg = styled.img`
    max-width: 50vw;
    margin-bottom: 10vh;
    /*align-self: flex-end;*/
    animation: floating-animation 2.5s ease-in-out infinite;
`;