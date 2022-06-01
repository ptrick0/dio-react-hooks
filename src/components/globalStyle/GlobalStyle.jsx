import { createGlobalStyle } from "styled-components";
import bgImg from '../../images/background.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        color: #332c36;
        padding: 0;
        margin: 0;
        font-family: 'Comic Sans', 'Comic', sans-serif;
        background: url(${bgImg}) center no-repeat;
    }

    @keyframes floating-animation {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(25px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;